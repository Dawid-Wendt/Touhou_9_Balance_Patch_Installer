@ECHO OFF
taskkill /f /im th09.exe
set CONFIG_PATH="%~dp0thcrap\config\games.js"
echo { > %CONFIG_PATH%
echo   "th09": "../vpatch.exe", >> %CONFIG_PATH%
echo   "th09_custom": "../custom.exe" >> %CONFIG_PATH%
echo } >> %CONFIG_PATH%
set a="%~dp0thcrap\bin\thcrap_loader.exe"
start "" %a% "rework.js" th09