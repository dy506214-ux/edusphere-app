# EduSphere - GitHub Push Script
# Run this to push code to GitHub

Write-Host ""
Write-Host "╔══════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║   EduSphere - GitHub Push Script         ║" -ForegroundColor Cyan
Write-Host "╚══════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Ask for GitHub username
$username = Read-Host "Apna GitHub username daalo"
$repoName = "edusphere-app"

Write-Host ""
Write-Host "📦 Git initialize kar raha hoon..." -ForegroundColor Yellow

# Initialize git if not already
if (-not (Test-Path ".git")) {
    git init
    Write-Host "✅ Git initialized" -ForegroundColor Green
} else {
    Write-Host "✅ Git already initialized" -ForegroundColor Green
}

Write-Host ""
Write-Host "📝 Files add kar raha hoon..." -ForegroundColor Yellow
git add .
Write-Host "✅ Files added" -ForegroundColor Green

Write-Host ""
Write-Host "💾 Commit kar raha hoon..." -ForegroundColor Yellow
git commit -m "EduSphere School Management System - Complete Deployment"
Write-Host "✅ Committed" -ForegroundColor Green

Write-Host ""
Write-Host "🔗 GitHub se connect kar raha hoon..." -ForegroundColor Yellow
$remoteUrl = "https://github.com/$username/$repoName.git"

# Remove existing remote if any
git remote remove origin 2>$null

git remote add origin $remoteUrl
Write-Host "✅ Remote added: $remoteUrl" -ForegroundColor Green

Write-Host ""
Write-Host "🚀 GitHub pe push kar raha hoon..." -ForegroundColor Yellow
git branch -M main
git push -u origin main

Write-Host ""
Write-Host "╔══════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║   ✅ CODE GITHUB PE PUSH HO GAYA!        ║" -ForegroundColor Green
Write-Host "╚══════════════════════════════════════════╝" -ForegroundColor Green
Write-Host ""
Write-Host "GitHub URL: https://github.com/$username/$repoName" -ForegroundColor Cyan
Write-Host ""
Write-Host "Ab STEP2_RENDER.md follow karo!" -ForegroundColor Yellow
Write-Host ""
