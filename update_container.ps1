# Путь к папке проекта
$ProjectPath = "D:\docker\for-git\"

# Переходим в папку проекта
Set-Location $ProjectPath

Write-Host "Pulling latest changes from GitHub..."
git pull origin master

Write-Host "Stopping old containers..."
docker-compose down

Write-Host "Building and starting containers..."
docker-compose up -d --build

Write-Host "Update complete!"

Read-Host