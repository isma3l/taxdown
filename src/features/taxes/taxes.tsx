import React, { useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Box, HStack, Button, Text } from 'native-base';
import { useAppDispatch, useTypedSelector } from '@/hooks';
import { fetchTaxes, selectActiveTaxes, selectInactiveTaxes } from './slices';
import { TaxList, Header } from './components';
import { TAX_SUBMISSIONS } from '@navigation/Routes';
import { navigate } from '@navigation/RootNavigation';

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
      <Text fontSize="lg" bold padding={3}>
        Taxes
      </Text>
      <Tab.Navigator>
        <Tab.Screen name="Active">{props => <TaxList taxes={activeTaxes} {...props} />}</Tab.Screen>
        <Tab.Screen name="Inactive">{props => <TaxList taxes={inactiveTaxes} {...props} />}</Tab.Screen>
      </Tab.Navigator>
      <HStack width="100%" justifyContent="center" background="white" padding="2">
        <Button
          colorScheme="secondary"
          variant="subtle"
          size="md"
          height="8"
          padding="1"
          alignSelf="center"
          width="70%"
          onPress={() => navigate(TAX_SUBMISSIONS)}>
          My tax submissions
        </Button>
      </HStack>
    </Box>
  );
};

export default Taxes;
