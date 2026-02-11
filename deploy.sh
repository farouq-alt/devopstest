#!/bin/bash
# Deployment Script - Automates the entire deployment process
# This script builds a Docker image and runs it on port 3000
# One command replaces all manual deployment steps

echo "🚀 Starting deployment..."

# ============================================
# STEP 1: Build Docker Image
# ============================================
# Docker image = a package containing the app + all dependencies
# This image can run on any machine (dev, staging, production)
echo "📦 Building Docker image..."
docker build -t devops-demo:latest .
# -t devops-demo:latest = tag the image with a name and version

# Check if build succeeded
if [ $? -ne 0 ]; then
  # $? = exit code of previous command (0 = success, non-zero = failure)
  echo "❌ Docker build failed!"
  exit 1  # Stop the script if build failed
fi

echo "✅ Docker image built successfully"

# ============================================
# STEP 2: Stop Old Container
# ============================================
# Before running new code, stop the old version
# This prevents port conflicts and ensures clean deployment
echo "🛑 Stopping existing container..."
docker stop devops-demo 2>/dev/null || true
# 2>/dev/null = hide error messages if container doesn't exist
# || true = don't fail if container isn't running

docker rm devops-demo 2>/dev/null || true
# Remove the stopped container so we can create a new one

# ============================================
# STEP 3: Start New Container
# ============================================
# Run the new Docker image as a container
# This is where your app actually runs
echo "▶️  Starting new container..."
docker run -d -p 3000:3000 --name devops-demo devops-demo:latest
# -d = run in background (detached mode)
# -p 3000:3000 = map port 3000 inside container to port 3000 on your machine
# --name devops-demo = give the container a name for easy reference
# devops-demo:latest = use the image we just built

# Check if container started successfully
if [ $? -eq 0 ]; then
  echo "✅ Deployment successful!"
  echo "🌐 App running at http://localhost:3000"
else
  echo "❌ Deployment failed!"
  exit 1  # Stop if deployment failed
fi
