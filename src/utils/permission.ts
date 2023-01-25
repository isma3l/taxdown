import { Platform } from 'react-native';
import { check, openSettings, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const CameraPermissions = Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA;

export const executeWithPermission = async (callback: () => void) => {
  const permission = await getPermission();

  switch (permission) {
    case RESULTS.GRANTED: {
      callback();
      return;
    }
    case RESULTS.DENIED: {
      const mRequest = await requestPermission();
      mRequest && callback();
      return;
    }
    default: {
      await handleOpenSetting();
    }
  }
};

const handleOpenSetting = async () => {
  try {
    await openSettings();
  } catch (error) {
    console.log(error);
  }
};

const getPermission = async () => {
  const result = await check(CameraPermissions);
  return result;
};

const requestPermission = async () => {
  try {
    const result = await request(CameraPermissions);
    return result === RESULTS.GRANTED;
  } catch (error) {
    console.log(error);
    return false;
  }
};
