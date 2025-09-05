# Zapier Component Guide

## Important Note
All commands in this guide should be executed from within the `zapier` folder:
```bash
cd zapier  # Always start here
```

## Prerequisites and Setup

1. Install Required Dependencies

First, install the global Zapier CLI:
```bash
npm install -g zapier-platform-cli
```

After creating your component (after the `zapier init` step), install the core dependency:
```bash
cd my-custom-app
npm install zapier-platform-core --save  # Required for all Zapier components
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

1. Create a test file for your component (e.g., `testComponent.js`) with this basic structure:
```javascript
const zapier = require('zapier-platform-core');
const App = require('./index');
const appTester = zapier.createAppTester(App);

async function testComponent() {
    try {
        // Test the example trigger
        const results = await appTester(
            App.triggers.example.operation.perform
        );
        console.log('Test Results:', results);
        return results;
    } catch (error) {
        console.error('Test Failed:', error);
        throw error;
    }
}

// Run the test
testComponent()
    .then(() => console.log('Test completed successfully'))
    .catch(error => {
        console.error('Test failed:', error);
        process.exit(1);
    });
```

2. Install required testing dependencies:
```bash
npm install zapier-platform-core
```

3. Run the test:
```bash
node testComponent.js
```

## Deploying to Zapier (Optional)

1. Register your component with Zapier:
```bash
zapier register
```
Note: You'll need to answer all necessary questions and provide required inputs during registration.

2. Push your component to Zapier:
```bash
zapier push
```

## Using Your Component (After Deployment)

Note: This section is only relevant if you choose to deploy your component.

1. Go to [zapier.com](https://zapier.com)
2. Create a new Zap
3. Search for and select your created component
4. Test or execute your component within Zapier's interface

## Local Development
You can continue developing and testing your component locally without deploying. Use the testing framework to validate your component's functionality during development.
