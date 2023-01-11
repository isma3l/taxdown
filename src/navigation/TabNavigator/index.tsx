import React, { useCallback, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TaxListScreen, SubmissionCreationScreen } from '@/features';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TaxList" component={TaxListScreen} />
      <Tab.Screen name="SubmissionCreation" component={SubmissionCreationScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
