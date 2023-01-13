import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Box, Heading } from 'native-base';
import styles from './styles';
import { TaxList } from './components/TaxList';

const Tab = createMaterialTopTabNavigator();

const Taxes = () => {
  return (
    <Box flex="1" safeAreaTop>
      <Heading size="md">row</Heading>
      <Tab.Navigator>
        <Tab.Screen name="Activo">
          {props => <TaxList title="Activo" active {...props} />}
        </Tab.Screen>
        <Tab.Screen name="Inactivo">
          {props => <TaxList title="Inactivo" active={false} {...props} />}
        </Tab.Screen>
      </Tab.Navigator>
    </Box>
  );
};

export default Taxes;
