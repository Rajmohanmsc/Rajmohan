# Deploy to GitHub Pages

# 1. Initialize Git (if not already done)
if (-not (Test-Path .git)) {
    git init
    Write-Host "Initialized Git repository."
}

# 2. Add all files
git add .
Write-Host "Added files to staging."

# 3. Commit
git commit -m "Initial commit: Professional Profile Website"
Write-Host "Committed files."

# 4. Rename branch to main
git branch -M main

# 5. Add remote (User needs to provide their repo URL if not set)
# Check if remote 'origin' exists
$remote = git remote get-url origin 2>$null
if (-not $remote) {
    Write-Host "Please enter your GitHub repository URL (e.g., https://github.com/rajmohanmsc/Rajmohan.git):"
    $repoUrl = Read-Host
    git remote add origin $repoUrl
    Write-Host "Added remote origin: $repoUrl"
} else {
    Write-Host "Remote origin already set to: $remote"
}

# 6. Push
Write-Host "Pushing to GitHub..."
git push -u origin main

Write-Host "Deployment script completed."
