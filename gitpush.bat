@echo off
for /f %%I in ('powershell -NoProfile -Command "Get-Date -Format yyyy-MM-dd_HH-mm"') do set datetime=%%I
set commitmsg=Auto commit %datetime%

git add .
git commit -m "%commitmsg%"
git push

pause