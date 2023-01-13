import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Taxes, TaxSubmissions, NewSubmission } from '@/features';
import { LOGIN, TAXES, NEW_SUBMISSION, TAX_SUBMISSIONS } from '../Routes';

export type RootStackParamList = {
  Login: undefined;
  Taxes: undefined;
  NewSubmission: undefined;
  TaxSubmissions: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={LOGIN} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={LOGIN} component={Login} />
      <Stack.Screen name={TAXES} component={Taxes} />
      <Stack.Screen name={NEW_SUBMISSION} component={NewSubmission} />
      <Stack.Screen name={TAX_SUBMISSIONS} component={TaxSubmissions} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
