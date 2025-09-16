# Claude Command Trigger Guide

## How to Use This Trigger File

1. This file serves as a central trigger point for executing component guide commands
2. All commands are stored in their respective component guide files
3. Use this file to reference and trigger command execution
4. **Important**: All commands are executed within their respective component folders
   - Zapier commands run in the `zapier` folder
   - n8n commands run in the `n8n` folder
   - Each component's commands stay isolated in their own directory

## Active Component Guides

### Zapier Component
- Commands are located in: [Zapier Component Guide](../zapier/zapier_component_guide.md)

### Airflow Component
- Commands are located in: [Airflow Component Guide](../airflow/airflow_component_guide.md)

---

## Adding New Components

### Template Structure
When adding a new component, use this template structure:
```markdown
### [Component Name] Component
- Commands are located in: [Component Name Guide](../folder_name/component_name_component_guide.md)
```

### Steps to Add New Component
1. Create your component guide file: `component_name_component_guide.md`
2. Add commands and documentation to your guide file
3. Copy the template above
4. Replace placeholders:
   - `[Component Name]` → Your component's name
   - `folder_name` → Your component's folder
   - `component_name` → Your component's file name
5. Add the filled template under "Active Component Guides" section

### Examples

Example 1: n8n
### n8n Component
- Commands are located in: [n8n Component Guide](../n8n/n8n_component_guide.md)

Example 2: Airflow
### Airflow Component
- Commands are located in: [Airflow Component Guide](../airflow/airflow_component_guide.md)

## How to Trigger Commands

To execute commands, use any of these phrases with Claude:
1. "Execute commands from zapier_component_guide.md"
2. "Run Zapier component setup process"
3. "Initialize Zapier component installation"
4. "Execute commands from airflow_component_guide.md"
5. "Initialize Airflow environment setup"
6. "Start Airflow component creation process"

## Important Notes:
- Commands will be executed in the sequence defined in the component guide
- All commands run within their respective component folders
- Some commands require user interaction (like SSO login or answering prompts)
- Claude will prompt you when manual input is needed
- All technical documentation and commands are maintained in the component guide files
- Each component's environment remains isolated in its own directory
- This file only serves as a trigger and reference point
