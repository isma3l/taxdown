import React, { FC, ReactNode } from 'react';
import { NativeBaseProvider } from 'native-base';

type WrapperNBProviderProps = {
  children: ReactNode;
};

const WrapperNBProvider: FC<WrapperNBProviderProps> = ({ children }) => (
  <NativeBaseProvider
    initialWindowMetrics={{
      frame: { x: 0, y: 0, width: 0, height: 0 },
      insets: { top: 0, left: 0, right: 0, bottom: 0 },
    }}>
    {children}
  </NativeBaseProvider>
);

export default WrapperNBProvider;
