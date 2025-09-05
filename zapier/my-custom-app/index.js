module.exports = {
  // This is just shorthand to reference the installed dependencies you have.
  // Zapier will need to know these before we can upload.
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,

  triggers: {
    example: {
      key: 'example',
      noun: 'Example',
      
      display: {
        label: 'Example Trigger',
        description: 'Triggers when an example event happens.'
      },

      operation: {
        perform: () => {
          return [
            { id: 1, name: 'Example 1' },
            { id: 2, name: 'Example 2' }
          ];
        }
      }
    }
  },

  searches: {},
  creates: {},
  resources: {},
};
