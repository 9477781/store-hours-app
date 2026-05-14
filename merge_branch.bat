@echo off
setlocal
echo ===================================================
echo   Antigravity Auto-Merge Script
echo ===================================================
echo.

echo 1. Checking GIT status...
git status >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: git command not found or not a git repository.
    echo Please ensure Git is installed and you are in the correct directory.
    pause
    exit /b 1
)

echo.
echo 2. Switching to main branch...
git checkout main
if %errorlevel% neq 0 (
    echo Error: Failed to check out 'main' branch.
    echo Please make sure you have no uncommitted changes.
    pause
    exit /b 1
)

echo.
echo 3. Pulling latest changes from remote...
git pull origin main
if %errorlevel% neq 0 (
    echo Error: Failed to pull from 'origin main'.
    echo Check your internet connection.
    pause
    exit /b 1
)

echo.
echo 4. Merging 'ui-display-check' into 'main'...
git merge ui-display-check
if %errorlevel% neq 0 (
    echo Error: Merge failed due to conflicts.
    echo Please resolve conflicts manually and then commit.
    cmd /k
    exit /b 1
)

echo.
echo 5. Pushing changes to GitHub...
git push origin main
if %errorlevel% neq 0 (
    echo Error: Failed to push to GitHub.
    echo You may need to authenticate or check permissions.
    pause
    exit /b 1
)

echo.
echo ===================================================
echo   SUCCESS: Branch merged and pushed!
echo ===================================================
pause
endlocal
