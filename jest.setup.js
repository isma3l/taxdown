jest.mock('react-native-image-picker', () => ({
    launchCamera: jest.fn()
}));

jest.mock('react-native-permissions', () => require('react-native-permissions/mock.js'));

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock.js')
);

jest.mock('@navigation/RootNavigation', () => ({
    resetAndNavigate: jest.fn(),
    navigate: jest.fn()
  })
);

jest.mock('@navigation/RootNavigation', () => ({
  navigate: jest.fn(),
}));