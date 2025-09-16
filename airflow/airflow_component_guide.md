# Airflow Component Guide

## Important Note
All commands in this guide should be executed from within the `airflow` folder:
```bash
cd airflow  # Always start here
```

## System Requirements Check

1. Verify Python Installation
```bash
# Check if Python is installed
python --version || python3 --version

# If Python is not found, install it:
# For Windows:
# 1. Download Python 3.10 from https://www.python.org/downloads/
# 2. Run the installer
# 3. IMPORTANT: Check "Add Python 3.10 to PATH" during installation
# 4. Verify installation:
python --version

# For Linux:
# sudo apt update
# sudo apt install python3.10
# sudo apt install python3.10-venv python3-pip

# For macOS:
# brew install python@3.10
```

2. Verify pip Installation
```bash
# Check if pip is installed
pip --version || pip3 --version

# If pip is not installed on Windows:
# It comes with Python installation if you use the official installer

# For Linux:
# sudo apt install python3-pip

# For macOS:
# pip is installed with Python from brew
```

## Prerequisites and Setup

1. Create and Activate Virtual Environment
```bash
# Create virtual environment
python -m venv airflow-env

# Activate virtual environment
# For Windows:
airflow-env\Scripts\activate
# For Linux/macOS:
source airflow-env/bin/activate
```

2. Install Required Dependencies
```bash
# Upgrade pip first
pip install --upgrade pip

# Install Apache Airflow with specific constraints for Python 3.10
pip install "apache-airflow==2.9.3" --constraint "https://raw.githubusercontent.com/apache/airflow/constraints-2.9.3/constraints-3.10.txt"
```

## Initialize Airflow Environment

1. Initialize the Metadata Database
```bash
airflow db init
```

2. Create Admin User
```bash
airflow users create \
    --username admin \
    --firstname First \
    --lastname Last \
    --role Admin \
    --email admin@example.com \
    --password admin
```

## Start Airflow Services

1. Start the Webserver (UI)
```bash
# Access UI at http://localhost:8080
airflow webserver -p 8080
```

2. Start the Scheduler (in a new terminal)
```bash
airflow scheduler
```

## Component Development

### Directory Structure
Airflow components should follow this structure:
```
airflow_home/
│
├── dags/                  # Place your DAG files here
│   └── my_test_dag.py    # Example DAG
│
├── plugins/               # Place custom operators/components here
│   ├── __init__.py
│   └── my_custom_operator.py
│
└── airflow.cfg           # Airflow configuration file
```

### Creating Custom Components

1. Create the plugins directory if it doesn't exist:
```bash
mkdir plugins
touch plugins/__init__.py
```

2. Create your custom operator:
```bash
touch plugins/my_custom_operator.py
```

### Testing Your Component

1. Create a test DAG in the dags directory:
```bash
touch dags/my_test_dag.py
```

2. Test DAG syntax:
```bash
python dags/my_test_dag.py
```

3. Test in Airflow:
- Access Airflow UI at http://localhost:8080
- Login with admin credentials
- Navigate to DAGs view
- Enable and trigger your DAG

## Local Development
You can continue developing and testing your components locally:
1. Components are automatically loaded from the plugins directory
2. DAGs are automatically detected from the dags directory
3. Changes to DAGs are picked up when the files are saved
4. Restart the webserver and scheduler if you modify plugins

## Important Notes:
- Ensure Python 3.10 is properly installed before proceeding with Airflow setup
- Always activate your virtual environment before running Airflow commands
- Keep DAGs and plugins in their respective directories
- Use meaningful names for your components and DAGs
- Test thoroughly before deploying to production
- Monitor logs in the Airflow UI for debugging

## Troubleshooting

### Python Installation Issues
1. If Python command is not found:
   - Verify Python is installed in your system
   - Check if Python is added to PATH
   - Try using `python3` instead of `python`
   - Restart your terminal after installation

2. If pip is not found:
   - Reinstall Python with pip included
   - Ensure pip is in your PATH
   - Try using `pip3` instead of `pip`

3. Virtual Environment Issues:
   - Make sure Python venv module is installed
   - Use the correct activation command for your shell
   - Check for permission issues in the directory
