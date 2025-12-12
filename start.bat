@echo off
echo ====================================
echo    Social Media App - Quick Start
echo ====================================
echo.

echo Starting MongoDB...
echo (Make sure MongoDB is installed and running)
echo.

echo Opening two terminal windows...
echo.

start cmd /k "cd Socialmedia\backend && npm run dev"
timeout /t 2 /nobreak

start cmd /k "cd Socialmedia\frontend && npm run dev"
timeout /t 2 /nobreak

echo.
echo ====================================
echo    ✅ App should open shortly!
echo ====================================
echo.
echo Backend: http://localhost:5000
echo Frontend: http://localhost:5173
echo.
echo Press Ctrl+C to stop any server
echo.
pause
