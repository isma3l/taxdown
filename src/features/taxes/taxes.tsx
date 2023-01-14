import React, { useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Box, Heading, HStack, Avatar, Button } from 'native-base';
import { useAppDispatch, useTypedSelector } from '@/hooks';
import { selectorTaxes, fetchTaxes } from './slices';
import styles from './styles';
import { TaxList, Header } from './components';

const Tab = createMaterialTopTabNavigator();

const Taxes = () => {
  const dispatch = useAppDispatch();
  const taxes = useTypedSelector(selectorTaxes);

  useEffect(() => {
    dispatch(fetchTaxes());
    /*
    https://redux-toolkit.js.org/api/createAsyncThunk#handling-thunk-errors
    const promise = dispatch(fetchUserById(props.userId))
    return () => {
      // `createAsyncThunk` attaches an `abort()` method to the promise
      promise.abort()
    }
    */
  }, [dispatch]);

  return (
    <Box flex="1" safeArea>
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
