import React from 'react';
import { useSelector } from 'react-redux';
import { Image } from 'react-native';
//import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { useFormik } from 'formik';
import { Box, FormControl, Input, VStack, Button } from 'native-base';
//import { RootStackParamList } from '../../navigation/StackNavigator';
import images from '@images';
import { useAppDispatch } from '@hooks';
import { signIn, selectLoading } from './authSlice';
import { UserCredentials } from './types';
import styles from './styles';

//type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login = (/* { navigation }: LoginProps */) => {
  const dispatch = useAppDispatch();
  const loading = useSelector(selectLoading);
  const { handleSubmit, values, setFieldValue } = useFormik<UserCredentials>({
    initialValues: { email: '', password: '' },
    onSubmit: credentials => {
      dispatch(signIn(credentials));
    },
  });

  const disabledButton = !(values.email && values.password);

  return (
    <Box safeArea alignItems="center">
      <VStack space={4} width="80%" marginTop="20">
        <Image source={images.logo} style={styles.logo} />
        <FormControl isRequired>
          <FormControl.Label>Email</FormControl.Label>
          <Input
            onChangeText={value => setFieldValue('email', value)}
            value={values.email}
            isDisabled={loading}
          />
        </FormControl>
        <FormControl isRequired>
          <FormControl.Label>Password</FormControl.Label>
          <Input
            onChangeText={value => setFieldValue('password', value)}
            value={values.password}
            type="password"
            isDisabled={loading}
          />
        </FormControl>
        <Button
          mt="2"
          colorScheme="indigo"
          marginTop={8}
          isDisabled={disabledButton}
          isLoading={loading}
          onPress={handleSubmit}>
          Sign in
        </Button>
      </VStack>
    </Box>
  );
};

export default Login;
