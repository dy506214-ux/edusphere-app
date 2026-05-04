# PowerShell script to create all dashboard panel files
# Run with: pwsh create-all-dashboards.ps1

Write-Host "🚀 Creating all dashboard panel files..." -ForegroundColor Green
Write-Host ""

$sourceFile = "components/dashboard/StudentDashboard.tsx"

if (-not (Test-Path $sourceFile)) {
    Write-Host "❌ Error: Source file not found: $sourceFile" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Found source file: $sourceFile" -ForegroundColor Green
Write-Host "📝 Reading source content..." -ForegroundColor Cyan

$content = Get-Content $sourceFile -Raw

Write-Host "✅ Source content loaded ($(($content.Length / 1024).ToString('F2')) KB)" -ForegroundColor Green
Write-Host ""

# Define all panels to create
$panels = @(
    @{
        Name = "TeacherDashboard"
        File = "components/dashboard/TeacherDashboard.tsx"
        Color = "green"
        ColorHex = "#16a34a"
        Role = "Teacher"
        Portal = "Teacher Portal"
        Greeting = "Good day"
    },
    @{
        Name = "ParentDashboard"
        File = "components/dashboard/ParentDashboard.tsx"
        Color = "orange"
        ColorHex = "#ea580c"
        Role = "Parent"
        Portal = "Parent Portal"
        Greeting = "Welcome"
    },
    @{
        Name = "AdminDashboard"
        File = "components/dashboard/AdminDashboard.tsx"
        Color = "purple"
        ColorHex = "#9333ea"
        Role = "Admin"
        Portal = "Admin Portal"
        Greeting = "Welcome back"
    },
    @{
        Name = "TransportDashboard"
        File = "components/dashboard/TransportDashboard.tsx"
        Color = "red"
        ColorHex = "#dc2626"
        Role = "Transport Manager"
        Portal = "Transport Portal"
        Greeting = "Welcome"
    }
)

foreach ($panel in $panels) {
    Write-Host "📝 Creating $($panel.Name)..." -ForegroundColor Cyan
    
    $newContent = $content
    
    # Replace component name
    $newContent = $newContent -replace "StudentDashboard", $panel.Name
    $newContent = $newContent -replace "Student Portal", $panel.Portal
    $newContent = $newContent -replace "Welcome back,", "$($panel.Greeting),"
    
    # Replace colors
    $newContent = $newContent -replace "from-blue-600 via-blue-500 to-indigo-600", "from-$($panel.Color)-600 via-$($panel.Color)-500 to-$($panel.Color)-600"
    $newContent = $newContent -replace "text-blue-200", "text-$($panel.Color)-200"
    $newContent = $newContent -replace "text-blue-600", "text-$($panel.Color)-600"
    $newContent = $newContent -replace "text-blue-700", "text-$($panel.Color)-700"
    $newContent = $newContent -replace "text-blue-500", "text-$($panel.Color)-500"
    $newContent = $newContent -replace "bg-blue-600", "bg-$($panel.Color)-600"
    $newContent = $newContent -replace "bg-blue-700", "bg-$($panel.Color)-700"
    $newContent = $newContent -replace "bg-blue-500", "bg-$($panel.Color)-500"
    $newContent = $newContent -replace "bg-blue-50", "bg-$($panel.Color)-50"
    $newContent = $newContent -replace "bg-blue-100", "bg-$($panel.Color)-100"
    $newContent = $newContent -replace "from-blue-50 to-blue-100", "from-$($panel.Color)-50 to-$($panel.Color)-100"
    $newContent = $newContent -replace "from-blue-50 to-indigo-100", "from-$($panel.Color)-50 to-$($panel.Color)-100"
    $newContent = $newContent -replace "from-blue-500 to-indigo-600", "from-$($panel.Color)-500 to-$($panel.Color)-600"
    $newContent = $newContent -replace "hover:bg-blue-50", "hover:bg-$($panel.Color)-50"
    $newContent = $newContent -replace "hover:bg-blue-600", "hover:bg-$($panel.Color)-600"
    $newContent = $newContent -replace "hover:bg-blue-700", "hover:bg-$($panel.Color)-700"
    $newContent = $newContent -replace "hover:text-blue-700", "hover:text-$($panel.Color)-700"
    $newContent = $newContent -replace "hover:text-blue-500", "hover:text-$($panel.Color)-500"
    $newContent = $newContent -replace "border-blue-200", "border-$($panel.Color)-200"
    $newContent = $newContent -replace "border-blue-300", "border-$($panel.Color)-300"
    
    # Write to file
    Set-Content -Path $panel.File -Value $newContent -Encoding UTF8
    
    Write-Host "   ✅ Created: $($panel.File)" -ForegroundColor Green
    Write-Host "   📊 Size: $(((Get-Item $panel.File).Length / 1024).ToString('F2')) KB" -ForegroundColor Gray
    Write-Host ""
}

Write-Host "🎉 All dashboard panels created successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Next steps:" -ForegroundColor Cyan
Write-Host "   1. Review each generated file" -ForegroundColor White
Write-Host "   2. Update feature cards with role-specific content" -ForegroundColor White
Write-Host "   3. Update tab names for each role" -ForegroundColor White
Write-Host "   4. Update routes to match role permissions" -ForegroundColor White
Write-Host "   5. Test each dashboard panel" -ForegroundColor White
Write-Host ""
Write-Host "📚 Reference:" -ForegroundColor Cyan
Write-Host "   - ROLE_PANELS_STATUS.md (feature specifications)" -ForegroundColor White
Write-Host "   - BUILD_ALL_PANELS.md (implementation guide)" -ForegroundColor White
Write-Host "   - COMPLETE_TEACHER_DASHBOARD.txt (detailed example)" -ForegroundColor White
