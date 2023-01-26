

jest.mock('react-native-image-picker', () => ({
    launchCamera: jest.fn()
}));

jest.mock('react-native-permissions', () => require('react-native-permissions/mock.js'));
