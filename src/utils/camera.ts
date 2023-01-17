import { launchCamera, MediaType } from 'react-native-image-picker';

export const launchNativeCamera = (callback: (result: string) => void) => {
  const mediaType: MediaType = 'mixed';

  let options = {
    saveToPhotos: true,
    mediaType: mediaType,
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  launchCamera(options, response => {
    if (response.didCancel) {
      console.log('User cancelled');
    } else if (response.errorCode) {
      console.error('Error: ', response.errorMessage);
    } else {
      const assets = response?.assets;
      if (Array.isArray(assets) && assets.length > 0) {
        const path = assets[0].uri ?? '';
        callback(path);
      }
    }
  });
};
