@echo off
cd /d "%~dp0"

REM Iniciar backend en nueva ventana
start cmd /k "cd backend && node server.js"

REM Iniciar frontend en nueva ventana, forzando el puerto 5173
start cmd /k "cd skillswap && npm run dev -- --port 5173"

REM Esperar 15 segundos para que ambos servidores arranquen
timeout /t 15 /nobreak > nul

REM Abrir la página principal en el navegador predeterminado
start http://localhost:5173

echo SkillSwap iniciado. Puedes cerrar esta ventana.
pause