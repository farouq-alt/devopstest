#!/bin/bash
# Monitoring Script - Real-time health check for your deployed app
# Shows container status, logs, and resource usage
# Use this to verify the app is running correctly

echo "📊 DevOps Monitoring Dashboard"
echo "=============================="
echo ""

# ============================================
# CHECK 1: Is the container running?
# ============================================
# This checks if the Docker container named "devops-demo" is currently active
if docker ps | grep -q devops-demo; then
  # docker ps = list all running containers
  # grep -q devops-demo = search for "devops-demo" (quiet mode, no output)
  
  echo "✅ Container Status: RUNNING"
  echo ""
  
  # ============================================
  # CHECK 2: Show container details
  # ============================================
  # Display which ports the container is using and how long it's been running
  echo "📦 Container Details:"
  docker ps --filter "name=devops-demo" --format "table {{.ID}}\t{{.Status}}\t{{.Ports}}"
  # --filter = only show containers named "devops-demo"
  # --format = display in table format with ID, Status, and Ports
  echo ""
  
  # ============================================
  # CHECK 3: Show recent logs
  # ============================================
  # Logs show what the app is doing (errors, requests, etc.)
  # If something is broken, the error will appear here
  echo "📝 Recent Logs:"
  docker logs --tail 10 devops-demo
  # --tail 10 = show only the last 10 lines of logs
  echo ""
  
  # ============================================
  # CHECK 4: Show resource usage
  # ============================================
  # Monitor CPU, memory, and network usage
  # If the app is slow, check if it's using too much memory
  echo "💾 Resource Usage:"
  docker stats --no-stream devops-demo
  # --no-stream = show stats once (don't continuously update)
  
else
  # Container is not running
  echo "❌ Container Status: NOT RUNNING"
  echo ""
  echo "To start the container, run: ./deploy.sh"
  # Guide the user on how to fix the problem
fi
