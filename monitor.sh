#!/bin/bash

echo "📊 DevOps Monitoring Dashboard"
echo "=============================="
echo ""

# Check if container is running
if docker ps | grep -q devops-demo; then
  echo "✅ Container Status: RUNNING"
  echo ""
  
  # Show container info
  echo "📦 Container Details:"
  docker ps --filter "name=devops-demo" --format "table {{.ID}}\t{{.Status}}\t{{.Ports}}"
  echo ""
  
  # Show recent logs
  echo "📝 Recent Logs:"
  docker logs --tail 10 devops-demo
  echo ""
  
  # Show resource usage
  echo "💾 Resource Usage:"
  docker stats --no-stream devops-demo
else
  echo "❌ Container Status: NOT RUNNING"
  echo ""
  echo "To start the container, run: ./deploy.sh"
fi
