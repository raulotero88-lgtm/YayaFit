<#
  Inyecta la barra y el pie de YayaFit en una pagina o entrada via REST API.
  Idempotente: quita la version previa (entre marcadores) antes de poner la nueva.
  Uso:  .\inject-nav.ps1 -Id 20 -Type page -Active musica
  Requiere: $env:WP_USER y $env:WP_APP_PASS
#>
param(
  [Parameter(Mandatory)][int]$Id,
  [ValidateSet('page','post')][string]$Type = 'page',
  [ValidateSet('inicio','rutinas','bienestar','musica','sobre','')][string]$Active = ''
)
$ErrorActionPreference = 'Stop'
if (-not $env:WP_USER -or -not $env:WP_APP_PASS) { throw 'Define $env:WP_USER y $env:WP_APP_PASS antes de ejecutar.' }

$root    = (Resolve-Path "$PSScriptRoot\..").Path        # app/wordpress
$b64     = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("$($env:WP_USER):$($env:WP_APP_PASS -replace ' ','')"))
$auth    = @{ Authorization = "Basic $b64" }
$apiBase = "https://yayafit.es/wp-json/wp/v2/$($Type)s/$Id"

$nav    = [IO.File]::ReadAllText("$root\barra-navegacion.html")
$footer = [IO.File]::ReadAllText("$root\pie-navegacion.html")

# Resaltar la seccion activa (se anade al final del style del enlace que coincide)
if ($Active) {
  $nav = [regex]::Replace($nav, "(data-yaya=`"$Active`"[^>]*style=`"[^`"]*)", '$1;color:#E8634A;border-bottom:3px solid #E8634A;font-weight:800')
}

# Leer contenido actual en crudo
$cur     = Invoke-RestMethod -Uri ($apiBase + '?context=edit') -Headers $auth
$content = [string]$cur.content.raw

# Quitar barra/pie previos (idempotencia)
$content = [regex]::Replace($content, '(?s)<!-- YAYAFIT-NAV-START -->.*?<!-- YAYAFIT-NAV-END -->\s*', '')
$content = [regex]::Replace($content, '(?s)\s*<!-- YAYAFIT-FOOTER-START -->.*?<!-- YAYAFIT-FOOTER-END -->', '')

$new = "$nav`n" + $content.Trim() + "`n$footer"

# Payload a archivo UTF-8 SIN BOM y envio con curl.exe (gotcha UTF-8)
$payload = @{ content = $new } | ConvertTo-Json -Depth 6 -Compress
$tmp = "$root\.payload-$Id.json"
[IO.File]::WriteAllText($tmp, $payload, (New-Object Text.UTF8Encoding $false))
$code = curl.exe -s -o NUL -w "%{http_code}" -X POST $apiBase -H "Authorization: Basic $b64" -H "Content-Type: application/json; charset=utf-8" --data "@$tmp"
Remove-Item $tmp -Force
Write-Host "OK -> $Type $Id (activo: '$Active') | HTTP $code"
