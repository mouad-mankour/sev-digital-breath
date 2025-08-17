@echo off
REM WordPress Theme Deployment Script

echo Building React application for WordPress...
call npm run build:wordpress

echo Creating deployment folder...
if not exist deploy mkdir deploy
if exist deploy\sev-digital-breath-theme rmdir /s /q deploy\sev-digital-breath-theme
mkdir deploy\sev-digital-breath-theme

echo Copying WordPress theme files...
xcopy wordpress-theme\* deploy\sev-digital-breath-theme\ /E /Y

echo Copying additional assets...
if exist src\assets\sev-hero-bg.jpg copy src\assets\sev-hero-bg.jpg deploy\sev-digital-breath-theme\assets\

echo Creating theme ZIP file...
powershell Compress-Archive -Path "deploy\sev-digital-breath-theme\*" -DestinationPath "deploy\sev-digital-breath-theme.zip" -Force

echo.
echo ==========================================
echo WordPress Theme Ready for Upload!
echo ==========================================
echo.
echo Next Steps:
echo 1. Go to your WordPress Admin Dashboard
echo 2. Navigate to Appearance ^> Themes
echo 3. Click "Add New" ^> "Upload Theme"
echo 4. Upload the file: deploy\sev-digital-breath-theme.zip
echo 5. Activate the theme
echo.
echo Theme location: deploy\sev-digital-breath-theme.zip
echo.
pause
