

jest.mock('react-native-image-picker', () => ({
    launchCamera: jest.fn()
}));

jest.mock('react-native-permissions', () => require('react-native-permissions/mock.js'));

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock.js')
);