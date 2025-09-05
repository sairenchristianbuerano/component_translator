const zapier = require('zapier-platform-core');

// Create a new version of your integration for testing
const App = require('./index');
const appTester = zapier.createAppTester(App);

// Test our component
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
