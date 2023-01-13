import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TAXES, NEW_SUBMISSION } from '../Routes';
import { Taxes, NewSubmission } from '@/features';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'TAX_LIST') {
            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
          } else if (route.name === 'SUBMISSION_CREATION') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen
        name={TAXES}
        component={Taxes}
        //        screenOptions={{ headerShown: false }}
      />
      <Tab.Screen name={NEW_SUBMISSION} component={NewSubmission} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
