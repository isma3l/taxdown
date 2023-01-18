import React, { useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Box, Heading, HStack, Button } from 'native-base';
import { useAppDispatch, useTypedSelector } from '@/hooks';
import { fetchTaxes, selectActiveTaxes, selectInactiveTaxes } from './slices';
import { TaxList, Header } from './components';

const Tab = createMaterialTopTabNavigator();

const Taxes = () => {
  const dispatch = useAppDispatch();
  const activeTaxes = useTypedSelector(selectActiveTaxes);
  const inactiveTaxes = useTypedSelector(selectInactiveTaxes);

  useEffect(() => {
    dispatch(fetchTaxes());
  }, [dispatch]);

  return (
    <Box flex="1" safeArea>
      <Header />
      <Heading size="md" padding={3}>
        Mis impuestos
      </Heading>
      <Tab.Navigator>
        <Tab.Screen name="Activos">
          {props => <TaxList taxes={activeTaxes} {...props} />}
        </Tab.Screen>
        <Tab.Screen name="Inactivos">
          {props => <TaxList taxes={inactiveTaxes} {...props} />}
        </Tab.Screen>
      </Tab.Navigator>
      <HStack width="100%" justifyContent="center" background="blue.300" padding="2">
        <Button variant="ghost" size="md" height="8" padding="1" alignSelf="center" width="70%">
          Ver todos mis impuestos fiscales
        </Button>
      </HStack>
    </Box>
  );
};

export default Taxes;
