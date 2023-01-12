import { createNavigationContainerRef } from '@react-navigation/native';
import { RootStackParamList } from '../StackNavigator';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate(name: any, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
