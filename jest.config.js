const config = {
  preset: 'react-native',
  verbose: true,
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['/node_modules/(?!native-base)/'],
  setupFiles: [
    '<rootDir>jest.setup.js'
  ],
};

module.exports = config;