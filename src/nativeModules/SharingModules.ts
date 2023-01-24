import { NativeModules } from 'react-native';
const { SharingModule } = NativeModules;

export const shareMessage = (message: string) => {
  SharingModule.shareMessage(message);
};
