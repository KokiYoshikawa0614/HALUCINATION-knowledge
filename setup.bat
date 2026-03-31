@echo off
echo ================================================
echo  HALUCINATION-knowledge Repository Setup
echo ================================================
echo.

echo [1/4] Creating folder structure...

mkdir 00_knowledge-base
mkdir 01_images\before-after
mkdir 01_images\screenshots
mkdir 01_images\workflow
mkdir 01_images\receipts
mkdir 02_prompts
mkdir 03_script
mkdir 04_outputs\pdf
mkdir 04_outputs\note-articles
mkdir 04_outputs\sns
mkdir 04_outputs\gumroad
mkdir 04_outputs\email
echo       Done

echo [2/4] Creating .gitkeep files...

for %%d in (
    01_images\before-after
    01_images\screenshots
    01_images\workflow
    01_images\receipts
    02_prompts
    03_script
    04_outputs\pdf
    04_outputs\note-articles
    04_outputs\sns
    04_outputs\gumroad
    04_outputs\email
) do (
    type nul > "%%d\.gitkeep"
)
echo       Done

echo [3/4] Creating template files...

echo # CHANGELOG > CHANGELOG.md
echo. >> CHANGELOG.md
echo - Initial setup >> CHANGELOG.md

echo # Media Links > 05_media-links.md

echo # Image Prompts > 02_prompts\image-prompts.md
echo # Video Prompts > 02_prompts\video-prompts.md
echo # Audio Prompts > 02_prompts\audio-prompts.md
echo # Replicate LoRA Params > 02_prompts\replicate-params.md
echo # Script > 03_script\script.md

echo       Done

echo [4/4] Git commit...

git add .
git commit -m "Initial setup: folder structure and templates"

echo.
echo ================================================
echo  Setup complete!
echo ================================================
echo.
echo Next steps:
echo   1. Copy knowledge-base.md to 00_knowledge-base\
echo   2. git add .
echo   3. git commit -m "Add knowledge base"
echo   4. git push
echo.
pause
