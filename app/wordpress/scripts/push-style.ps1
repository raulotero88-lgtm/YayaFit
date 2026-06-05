<#
  Empuja el estilo final YayaFit (base lavanda + fucsia de accion) a una pagina/entrada
  via REST API. Idempotente. Hace backup del estado previo antes de escribir.

  Estrategias de cuerpo (excluyentes):
    -BodyFile <ruta rel a app/wordpress>  -> reemplaza el cuerpo por el artefacto local
    -FixMusica                            -> in-place: titulos lila->tinta, boton verde->fucsia
    -FixSobre                             -> in-place: heading "Como funciona" lila->tinta, CTA registro lila->fucsia
    (ninguno)                             -> conserva el cuerpo, solo cambia barra+pie

  Uso:   .\push-style.ps1 -Id 9 -Active inicio -BodyFile paginas\inicio-hub.html
  Requiere: $env:WP_USER y $env:WP_APP_PASS
#>
param(
  [Parameter(Mandatory)][int]$Id,
  [ValidateSet('page','post')][string]$Type='page',
  [ValidateSet('inicio','rutinas','bienestar','musica','sobre','')][string]$Active='',
  [string]$BodyFile='',
  [switch]$FixMusica,
  [switch]$FixSobre
)
$ErrorActionPreference='Stop'
if(-not $env:WP_USER -or -not $env:WP_APP_PASS){throw 'Define $env:WP_USER y $env:WP_APP_PASS antes de ejecutar.'}

$root  = (Resolve-Path "$PSScriptRoot\..").Path                 # app/wordpress
$b64   = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("$($env:WP_USER):$($env:WP_APP_PASS -replace ' ','')"))
$auth  = @{ Authorization = "Basic $b64" }
$api   = "https://yayafit.es/wp-json/wp/v2/$($Type)s/$Id"
$enc   = New-Object Text.UTF8Encoding $false

$nav    = [IO.File]::ReadAllText("$root\barra-navegacion.html")
$footer = [IO.File]::ReadAllText("$root\pie-navegacion.html")

# Resaltar pestana activa = pastilla fucsia + texto blanco
if($Active){
  $nav = [regex]::Replace($nav, "(data-yaya=`"$Active`"[^>]*style=`"[^`"]*)", '$1;color:#fff;background:#D63E78;font-weight:800')
}

# Leer cuerpo actual (raw) y hacer backup
$cur  = Invoke-RestMethod -Uri ($api + '?context=edit') -Headers $auth
$body = [string]$cur.content.raw
$bk   = "$root\backups\fucsia-restyle-2026-06-05"
New-Item -ItemType Directory -Force -Path $bk | Out-Null
[IO.File]::WriteAllText("$bk\$Type-$Id.before.html", $body, $enc)

# Quitar barra/pie previos (idempotencia)
$body = [regex]::Replace($body, '(?s)<!-- YAYAFIT-NAV-START -->.*?<!-- YAYAFIT-NAV-END -->\s*', '')
$body = [regex]::Replace($body, '(?s)\s*<!-- YAYAFIT-FOOTER-START -->.*?<!-- YAYAFIT-FOOTER-END -->', '')

# Estrategia de cuerpo
if($BodyFile){
  $body = [IO.File]::ReadAllText((Join-Path $root $BodyFile))
}
if($FixMusica){
  $body = $body -replace '#a887c9','#2A2233' -replace '#A887C9','#2A2233'   # titulos de cancion -> tinta
  $body = $body -replace '#6BAB7A','#D63E78' -replace '#6bab7a','#D63E78'   # boton Himno verde -> fucsia
}
if($FixSobre){
  $body = $body -replace '<h2 style="color:#a887c9;">C', '<h2 style="color:#2A2233;">C'                       # "Como funciona"
  $body = $body -replace 'background:#a887c9;color:#fff;font-size:19px', 'background:#D63E78;color:#fff;font-size:19px'  # CTA registro
}

$new = "$nav`n" + $body.Trim() + "`n$footer"
[IO.File]::WriteAllText("$bk\$Type-$Id.after.html", $new, $enc)

# Enviar (gotcha UTF-8: payload a archivo sin BOM + curl --data @)
$payload = @{ content = $new } | ConvertTo-Json -Depth 6 -Compress
$tmp = "$root\.payload-$Id.json"
[IO.File]::WriteAllText($tmp, $payload, $enc)
$code = curl.exe -s -o NUL -w "%{http_code}" -X POST $api -H "Authorization: Basic $b64" -H "Content-Type: application/json; charset=utf-8" --data "@$tmp"
Remove-Item $tmp -Force
Write-Host ("OK -> {0} {1} | activo:'{2}' body:'{3}' fixMusica:{4} fixSobre:{5} | HTTP {6}" -f $Type,$Id,$Active,$BodyFile,[bool]$FixMusica,[bool]$FixSobre,$code)
