import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Box, Heading, HStack, Avatar, Button } from 'native-base';
import styles from './styles';
import { TaxList, Header } from './components';
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
    { id: '10', name: 'pedro juan', year: '2021', active: true },
    { id: '20', name: 'maria perez', year: '2019', active: false },
    { id: '30', name: 'juana maria', year: '2018', active: true },
    { id: '40', name: 'marina rubeidio', year: '2023', active: false },
    { id: '50', name: 'giomar morales', year: '2021', active: true },
    { id: '60', name: 'luci daniela', year: '2019', active: false },
    { id: '70', name: 'felipe cordoba', year: '2018', active: true },
    { id: '80', name: 'arian gaston', year: '2023', active: false },
    { id: '100', name: 'pedro juan', year: '2021', active: true },
    { id: '200', name: 'maria perez', year: '2019', active: false },
    { id: '300', name: 'juana maria', year: '2018', active: true },
    { id: '400', name: 'marina rubeidio', year: '2023', active: false },
    { id: '500', name: 'giomar morales', year: '2021', active: true },
    { id: '600', name: 'luci daniela', year: '2019', active: false },
    { id: '700', name: 'felipe cordoba', year: '2018', active: true },
    { id: '800', name: 'arian gaston', year: '2023', active: false },
  ];
  return (
    <Box flex="1" safeAreaTop>
      <Header />
      <Heading size="md" padding={3}>
        Mis impuestos
      </Heading>
      <Tab.Navigator>
        <Tab.Screen name="Activos">
          {props => <TaxList taxes={taxes} showActive {...props} />}
        </Tab.Screen>
        <Tab.Screen name="Inactivos">
          {props => <TaxList taxes={taxes} showActive={false} {...props} />}
        </Tab.Screen>
      </Tab.Navigator>
      <HStack
        rounded="lg"
        borderColor="coolGray.200"
        borderWidth="1"
        width="65%"
        justifyContent="center"
        background="white"
        marginX="4"
        marginBottom="4"
        padding="0">
        <Button variant="ghost" size="md" height="8" padding="1" alignSelf="center" color="black">
          Ver todos mis impuestos fiscales
        </Button>
      </HStack>
    </Box>
  );
};

export default Taxes;
