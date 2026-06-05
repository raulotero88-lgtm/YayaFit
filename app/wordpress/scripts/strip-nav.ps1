<#
  Quita la barra+pie de marca inyectados (entre marcadores YAYAFIT-NAV / YAYAFIT-FOOTER)
  de una pagina/entrada via REST API. Conserva el resto del cuerpo. Hace backup previo.
  Motivo: el tema ya tiene su propio menu nativo; la barra inyectada duplicaba.
  Uso:   .\strip-nav.ps1 -Id 9
  Requiere: $env:WP_USER y $env:WP_APP_PASS
#>
param(
  [Parameter(Mandatory)][int]$Id,
  [ValidateSet('page','post')][string]$Type='page'
)
$ErrorActionPreference='Stop'
if(-not $env:WP_USER -or -not $env:WP_APP_PASS){throw 'Define $env:WP_USER y $env:WP_APP_PASS antes de ejecutar.'}

$root = (Resolve-Path "$PSScriptRoot\..").Path
$b64  = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("$($env:WP_USER):$($env:WP_APP_PASS -replace ' ','')"))
$auth = @{ Authorization = "Basic $b64" }
$api  = "https://yayafit.es/wp-json/wp/v2/$($Type)s/$Id"
$enc  = New-Object Text.UTF8Encoding $false

$cur  = Invoke-RestMethod -Uri ($api + '?context=edit') -Headers $auth
$body = [string]$cur.content.raw

$bk = "$root\backups\strip-nav-2026-06-05"
New-Item -ItemType Directory -Force -Path $bk | Out-Null
[IO.File]::WriteAllText("$bk\$Type-$Id.before.html", $body, $enc)

$body = [regex]::Replace($body, '(?s)\s*<!-- YAYAFIT-NAV-START -->.*?<!-- YAYAFIT-NAV-END -->\s*', '')
$body = [regex]::Replace($body, '(?s)\s*<!-- YAYAFIT-FOOTER-START -->.*?<!-- YAYAFIT-FOOTER-END -->\s*', '')
$body = $body.Trim()
[IO.File]::WriteAllText("$bk\$Type-$Id.after.html", $body, $enc)

$payload = @{ content = $body } | ConvertTo-Json -Depth 6 -Compress
$tmp = "$root\.payload-$Id.json"
[IO.File]::WriteAllText($tmp, $payload, $enc)
$code = curl.exe -s -o NUL -w "%{http_code}" -X POST $api -H "Authorization: Basic $b64" -H "Content-Type: application/json; charset=utf-8" --data "@$tmp"
Remove-Item $tmp -Force
Write-Host ("STRIP -> {0} {1} | HTTP {2}" -f $Type,$Id,$code)
