# DevOps Demo - Live Explanation Guide

## What is DevOps?
DevOps is a way of working where development and operations are automated together so code goes from Git to production fast and safely.

## The DevOps Flow
```
Code → Git → CI → Build → Deploy → Monitor
```

---

## Live Demo Steps

### Step 1: Git (Code Tracking)
```bash
git status
```
**Say:** "Every change is tracked in Git. Nothing goes to production without version control."

---

### Step 2: CI (Continuous Integration)
**Show:** `.github/workflows/ci.yml`

**Say:** "Every push automatically runs tests and builds. If tests fail, deployment stops."

**What happens:**
- Installs dependencies
- Runs linter
- Builds the project
- Builds Docker image
- Notifies success/failure

---

### Step 3: Docker (Containerization)
**Show:** `Dockerfile`

```bash
docker build -t devops-demo:latest .
docker run -p 3000:3000 devops-demo:latest
```

**Say:** "Docker makes the app run the same everywhere. Dev, staging, production - identical."

---

### Step 4: CD (Continuous Deployment)
**Show:** `deploy.sh`

```bash
chmod +x deploy.sh
./deploy.sh
```

**Say:** "After CI succeeds, the app is automatically deployed. One script, zero manual steps."

---

### Step 5: Monitoring
**Show:** `monitor.sh`

```bash
chmod +x monitor.sh
./monitor.sh
```

**Say:** "If something breaks, we see it immediately. Logs, resource usage, container status - all visible."

---

## Key Takeaway
**"DevOps is not tools, it's automation of the entire delivery process."**

---

## Quick Reference

| Step | Command | Purpose |
|------|---------|---------|
| Build | `npm run build` | Compile React app |
| Docker Build | `docker build -t devops-demo:latest .` | Create container image |
| Deploy | `./deploy.sh` | Run container on port 3000 |
| Monitor | `./monitor.sh` | Check app health |
| Logs | `docker logs devops-demo` | View application logs |

---

## Common Questions

**Q: Is DevOps a programming language?**
A: No, it's a workflow and culture.

**Q: Is Docker DevOps?**
A: No, Docker is a tool used in DevOps.

**Q: Why is CI important?**
A: Because it prevents broken code from reaching production.

**Q: What happens if deployment fails?**
A: The pipeline stops and nothing goes live.
