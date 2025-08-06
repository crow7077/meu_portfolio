@echo off
:: Obtém data e hora no formato AAAA-MM-DD HH:MM
for /f "tokens=2 delims==" %%I in ('"wmic os get localdatetime /value"') do set datetime=%%I
set commitmsg=Auto commit %datetime:~0,4%-%datetime:~4,2%-%datetime:~6,2% %datetime:~8,2%:%datetime:~10,2%

:: Executa os comandos do Git
git add .
git commit -m "%commitmsg%"
git push

pause
