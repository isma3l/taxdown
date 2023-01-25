import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Taxes, TaxSubmissions, Submission } from '@/features';
import { LOGIN, TAXES, SUBMISSION, TAX_SUBMISSIONS } from '../Routes';

export type RootStackParamList = {
  Login: undefined;
  Taxes: undefined;
  Submission: { taxId: string };
  TaxSubmissions: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={LOGIN}>
      <Stack.Screen name={LOGIN} component={Login} options={{ headerShown: false }} />
      <Stack.Screen name={TAXES} component={Taxes} options={{ headerShown: false }} />
      <Stack.Screen name={SUBMISSION} component={Submission} options={{ title: 'Create Submission' }} />
      <Stack.Screen name={TAX_SUBMISSIONS} component={TaxSubmissions} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
