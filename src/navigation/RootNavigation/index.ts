import { createNavigationContainerRef } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';
import { RootStackParamList } from '../StackNavigator';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();
export { type RootStackParamList } from '../StackNavigator';

export function navigate(name: keyof RootStackParamList, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function resetAndNavigate(name: keyof RootStackParamList, params?: any) {
  const { ...rest } = navigationRef.current?.getRootState();
  return navigationRef.current?.dispatch(
    CommonActions.reset({
      ...rest,
      index: 0,
      routes: [
        {
          name,
          params,
        },
      ],
    }),
  );
}
