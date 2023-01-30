import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Taxes, TaxSubmissions, Submission, Splash } from '@/features';
import { SCREEN_LOGIN, SREEN_TAXES, SCREEN_SUBMISSION, SCREEN_TAX_SUBMISSIONS, SCREEN_SPLASH } from '../Routes';

export type RootStackParamList = {
  Login: undefined;
  Taxes: undefined;
  Submission: { taxId: string };
  TaxSubmissions: undefined;
  Splash: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={SCREEN_SPLASH}>
      <Stack.Screen name={SCREEN_SPLASH} component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name={SCREEN_LOGIN} component={Login} options={{ headerShown: false }} />
      <Stack.Screen name={SREEN_TAXES} component={Taxes} options={{ headerShown: false }} />
      <Stack.Screen name={SCREEN_SUBMISSION} component={Submission} options={{ title: 'Create Submission' }} />
      <Stack.Screen name={SCREEN_TAX_SUBMISSIONS} component={TaxSubmissions} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
