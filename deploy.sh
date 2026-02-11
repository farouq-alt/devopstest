#!/bin/bash

echo "🚀 Starting deployment..."

# Build Docker image
echo "📦 Building Docker image..."
docker build -t devops-demo:latest .

if [ $? -ne 0 ]; then
  echo "❌ Docker build failed!"
  exit 1
fi

echo "✅ Docker image built successfully"

# Stop existing container
echo "🛑 Stopping existing container..."
docker stop devops-demo 2>/dev/null || true
docker rm devops-demo 2>/dev/null || true

# Run new container
echo "▶️  Starting new container..."
docker run -d -p 3000:3000 --name devops-demo devops-demo:latest

if [ $? -eq 0 ]; then
  echo "✅ Deployment successful!"
  echo "🌐 App running at http://localhost:3000"
else
  echo "❌ Deployment failed!"
  exit 1
fi
