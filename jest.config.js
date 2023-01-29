const config = {
  preset: 'react-native',
  verbose: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: ['/node_modules/(?!native-base)/'],
  setupFiles: [
    '<rootDir>jest.setup.js'
  ],
};

module.exports = config;