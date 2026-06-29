<#
.SYNOPSIS
    ZYZ Home - GitHub Pages Deployment Script
.DESCRIPTION
    Builds and deploys the ZYZ Home static website to GitHub Pages.
    Requires: git, PowerShell 5.1+
.NOTES
    Version: 1.0
    Author: ZYZ Home
#>

[CmdletBinding()]
param(
    [string]$Branch = "gh-pages",
    [string]$Remote = "origin",
    [switch]$SkipCommit,
    [switch]$DryRun
)

$ErrorActionPreference = "Stop"
$siteDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

function Write-Header($text) {
    Write-Host "`n=== $text ===" -ForegroundColor Cyan
}

function Write-Success($text) {
    Write-Host "  [OK] $text" -ForegroundColor Green
}

function Write-WarningText($text) {
    Write-Host "  [WARN] $text" -ForegroundColor Yellow
}

function Write-ErrorText($text) {
    Write-Host "  [FAIL] $text" -ForegroundColor Red
}

# Pre-flight checks
Write-Header "Pre-flight Checks"

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-ErrorText "Git is not installed or not in PATH"
    exit 1
}
Write-Success "Git detected: $(git --version)"

if (-not (Test-Path "$siteDir\.git")) {
    Write-ErrorText "Not a git repository. Run 'git init' first."
    exit 1
}
Write-Success "Git repository detected"

$requiredFiles = @("index.html", "sitemap.xml", "robots.txt")
$missing = $requiredFiles | Where-Object { -not (Test-Path "$siteDir\$_") }
if ($missing) {
    Write-WarningText "Missing recommended files: $($missing -join ', ')"
} else {
    Write-Success "All required files present"
}

# Validate links
Write-Header "Validating Internal Links"
$htmlFiles = Get-ChildItem -Path $siteDir -Filter "*.html" -Recurse | Where-Object { $_.FullName -notmatch "\.git" }
$allLinks = @()
foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw
    $matches = [regex]::Matches($content, 'href="([^"]+)"')
    foreach ($m in $matches) {
        $link = $m.Groups[1].Value
        if ($link -match "^(http|https|mailto|#|//)") { continue }
        $allLinks += [PSCustomObject]@{
            File  = $file.Name
            Link  = $link
            Valid = Test-Path (Join-Path $siteDir $link)
        }
    }
}
$broken = $allLinks | Where-Object { -not $_.Valid }
if ($broken) {
    Write-WarningText "Found $($broken.Count) potentially broken internal links"
    $broken | ForEach-Object { Write-Host "       $($_.File) -> $($_.Link)" -ForegroundColor DarkYellow }
} else {
    Write-Success "All internal links appear valid"
}

# Git operations
Write-Header "Git Operations"
Set-Location $siteDir

$currentBranch = git rev-parse --abbrev-ref HEAD
Write-Host "  Current branch: $currentBranch" -ForegroundColor Gray

if (-not $SkipCommit) {
    git add -A
    $status = git status --porcelain
    if ($status) {
        git commit -m "Deploy: $timestamp [skip ci]"
        Write-Success "Changes committed"
    } else {
        Write-Success "No changes to commit"
    }
}

# Deploy to gh-pages
Write-Header "Deploying to GitHub Pages"

if ($DryRun) {
    Write-Host "  [DRY RUN] Would push to $Remote/$Branch" -ForegroundColor Magenta
    Write-Host "  [DRY RUN] Command: git subtree push --prefix=. $Remote $Branch" -ForegroundColor Magenta
} else {
    try {
        # Ensure branch exists remotely or create orphan locally
        $branches = git branch -a
        if ($branches -notmatch "remotes/$Remote/$Branch") {
            Write-WarningText "Remote branch $Branch not found. Creating orphan branch."
            git checkout --orphan $Branch
            git rm -rf .
            git checkout $currentBranch -- .
            git add -A
            git commit -m "Initial $Branch commit"
            git push $Remote $Branch
        }

        # Use git subtree or push current contents
        # Simple approach: force push current tree to gh-pages
        git push $Remote "$(git rev-parse HEAD):refs/heads/$Branch" --force
        Write-Success "Deployed to https://zyzhome.com (via GitHub Pages)"
    } catch {
        Write-ErrorText "Deployment failed: $_"
        exit 1
    }
}

# Summary
Write-Header "Deployment Summary"
Write-Host "  Site:       https://zyzhome.com" -ForegroundColor White
Write-Host "  Branch:     $Branch" -ForegroundColor White
Write-Host "  Time:       $timestamp" -ForegroundColor White
Write-Host "  Pages:      $($htmlFiles.Count) HTML files" -ForegroundColor White
Write-Host "  Images:     $((Get-ChildItem "$siteDir\images" -File).Count) image files" -ForegroundColor White
Write-Success "Done!"
