# Airflow Docker Setup Guide

## Important Note
All commands in this guide should be executed from within the `airflow` folder:
```bash
cd airflow  # Always start here
```

## Prerequisites

1. Verify Docker Installation
```bash
# Check Docker version
docker --version

# Check Docker Compose version
docker-compose --version

# If Docker is not installed:
# Windows: Download and install Docker Desktop from https://www.docker.com/products/docker-desktop
# Linux: Follow instructions at https://docs.docker.com/engine/install/
# macOS: Download and install Docker Desktop from https://www.docker.com/products/docker-desktop
```

## Quick Setup

1. Clone Airflow Repository
```bash
git clone https://github.com/apache/airflow.git
cd airflow
```

2. Start Airflow using Docker Compose
```bash
docker-compose up
```

## Accessing Airflow

1. Wait for all services to start (this may take a few minutes)
2. Access the Airflow UI at: http://localhost:8080
3. Login with default credentials:
```
Username: airflow
Password: airflow
```
Note: These are the default credentials provided by the Docker setup. For production environments, you should change these immediately.

## Docker Commands Reference

1. Start Airflow in detached mode:
```bash
docker-compose up -d
```

2. Stop Airflow:
```bash
docker-compose down
```

3. View logs:
```bash
docker-compose logs -f
```

4. Restart services:
```bash
docker-compose restart
```

## Directory Structure
When using Docker, Airflow will create this structure:
```
airflow/
│
├── dags/              # Place your DAG files here
├── logs/              # Airflow logs
├── plugins/           # Custom plugins
└── docker-compose.yml # Docker configuration
```

## Important Notes:
- Make sure ports 8080 is not in use by other applications
- Docker must have sufficient resources allocated (minimum 4GB RAM recommended)
- Any custom DAGs should be placed in the `dags` directory
- Configuration changes require container restart
- Docker volume persists data between restarts

## Troubleshooting

1. If containers fail to start:
```bash
# View detailed logs
docker-compose logs -f

# Rebuild containers
docker-compose down
docker-compose up --build
```

2. If you can't access the web UI:
```bash
# Check if containers are running
docker-compose ps

# Check webserver logs specifically
docker-compose logs webserver
```

3. Resource Issues:
- Increase Docker memory allocation in Docker Desktop settings
- Check CPU allocation
- Ensure sufficient disk space

4. Permission Issues:
```bash
# Reset ownership of files
sudo chown -R $USER:$USER .
```

## Clean Up

Remove all containers and volumes:
```bash
docker-compose down -v
```

## Development Workflow

1. Adding Custom DAGs:
```bash
# Place DAG files in ./dags directory
# They will be automatically picked up
```

2. Adding Custom Plugins:
```bash
# Place plugin files in ./plugins directory
# Restart containers to load new plugins
docker-compose restart
```
