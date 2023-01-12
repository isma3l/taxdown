import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '@/features';
import TabNavigator from '../TabNavigator';
import { LOGIN, DASHBOARD } from '../Routes';

export type RootStackParamList = {
  Login: undefined;
  Dashboard: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={LOGIN} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={LOGIN} component={LoginScreen} />
      <Stack.Screen name={DASHBOARD} component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
