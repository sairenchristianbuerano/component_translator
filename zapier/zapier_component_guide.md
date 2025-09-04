# Zapier Component Guide

## Important Note
All commands in this guide should be executed from within the `zapier` folder:
```bash
cd zapier  # Always start here
```

## Prerequisites and Setup

1. Install Required Dependencies
```bash
npm install
npm install -g zapier-platform-cli 
```

2. Login to Zapier
```bash
zapier login -sso
```
Note: You'll need to login to developer.zapier.com, generate and copy the deploy key when prompted.

## Component Creation

1. Initialize a new Zapier component
```bash
zapier init my-custom-app --template=minimal
```
- When prompted, choose module type: `commonjs`
- Open `my-custom-app` in VS Code

## Testing

1. Create a test file for your component (e.g., `testComponentName.js`)
2. Run the test using:
```bash
node testComponentName.js
```

## Deploying to Zapier

1. Register your component with Zapier:
```bash
zapier register
```
Note: You'll need to answer all necessary questions and provide required inputs during registration.

2. Push your component to Zapier:
```bash
zapier push
```

## Using Your Component

1. Go to [zapier.com](https://zapier.com)
2. Create a new Zap
3. Search for and select your created component
4. Test or execute your component within Zapier's interface
