import React from 'react';
import { Provider } from 'react-redux';
import { NativeBaseProvider } from 'native-base';

import { store } from '@/store';
import Navigation from './navigation';

export default () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Navigation />
      </NativeBaseProvider>
    </Provider>
  );
};
