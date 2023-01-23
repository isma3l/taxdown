import { requireNativeComponent, ViewProps } from 'react-native';

interface NativeButtonProps extends ViewProps {}

export const NativeShareButtonView = requireNativeComponent<NativeButtonProps>('RCTShareButtonView');
