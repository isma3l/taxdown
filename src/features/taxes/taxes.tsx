import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Box, Heading, HStack, Avatar } from 'native-base';
import styles from './styles';
import { TaxList } from './components/TaxList';
import { Tax } from './types';

const Tab = createMaterialTopTabNavigator();

const Taxes = () => {
  const taxes: Tax[] = [
    { id: '1', name: 'pedro juan', year: '2021', active: true },
    { id: '2', name: 'maria perez', year: '2019', active: false },
    { id: '3', name: 'juana maria', year: '2018', active: true },
    { id: '4', name: 'marina rubeidio', year: '2023', active: false },
    { id: '5', name: 'giomar morales', year: '2021', active: true },
    { id: '6', name: 'luci daniela', year: '2019', active: false },
    { id: '7', name: 'felipe cordoba', year: '2018', active: true },
    { id: '8', name: 'arian gaston', year: '2023', active: false },
  ];
  return (
    <Box flex="1" safeAreaTop>
      <HStack justifyContent="space-between" padding={2} background="red.100">
        <Avatar size="sm">KM</Avatar>
      </HStack>
      <Heading size="md" padding={3}>
        Taxes
      </Heading>
      <Tab.Navigator>
        <Tab.Screen name="Activo">
          {props => <TaxList taxes={taxes} showActive {...props} />}
        </Tab.Screen>
        <Tab.Screen name="Inactivo">
          {props => <TaxList taxes={taxes} showActive={false} {...props} />}
        </Tab.Screen>
      </Tab.Navigator>
    </Box>
  );
};

export default Taxes;
