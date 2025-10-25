# PowerShell Setup Script for SAT Tutoring App
# Run this script from the project root directory

Write-Host "🚀 Setting up SAT Tutoring Application..." -ForegroundColor Green

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js found: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js not found. Please install Node.js from https://nodejs.org/" -ForegroundColor Red
    exit 1
}

# Install backend dependencies
Write-Host "📦 Installing backend dependencies..." -ForegroundColor Yellow
npm install

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to install backend dependencies" -ForegroundColor Red
    exit 1
}

# Install frontend dependencies
Write-Host "📦 Installing frontend dependencies..." -ForegroundColor Yellow
cd client
npm install

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to install frontend dependencies" -ForegroundColor Red
    exit 1
}

cd ..

Write-Host "✅ Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "🎯 Next steps:" -ForegroundColor Cyan
Write-Host "1. Start development servers: npm run dev-all" -ForegroundColor White
Write-Host "2. Open browser: http://localhost:3000" -ForegroundColor White
Write-Host "3. API available at: http://localhost:5000" -ForegroundColor White
Write-Host ""
Write-Host "📚 For more information, see DEVELOPMENT_GUIDE.md" -ForegroundColor Gray