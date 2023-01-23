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
import { NativeShareButtonView } from '@/nativeComponents';

//type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login = (/* { navigation }: LoginProps */) => {
  const dispatch = useAppDispatch();
  const loading = useSelector(selectLoading);
  const { handleSubmit, errors, isValid, values, setFieldValue } = useFormik<UserCredentials>({
    initialValues: { email: '', password: '' },
    validate: ({ email, password }) => {
      console.log('email: ', email, ' password: ', password);
      let errores = {};
      if (email.length == 0 || email.length > 4) {
        errores.email = 'Este campo no debe exceder 4 caraceters';
      }
      if (password.length > 5) {
        errores.password = 'Este campo no debe exceder 4 caraceters';
      }
      return errores;
    },
    onSubmit: credentials => {
      dispatch(signIn(credentials));
    },
  });

  const disabledButton = !isValid;

  return (
    <Box safeArea alignItems="center">
      <VStack space={4} width="80%" marginTop="20">
        <Image source={images.logo} style={styles.logo} />
        <FormControl isRequired>
          <FormControl.Label>Email</FormControl.Label>
          <Input onChangeText={value => setFieldValue('email', value)} value={values.email} isDisabled={loading} />
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
        <NativeShareButtonView style={{ with: 100, height: 100 }} />
      </VStack>
    </Box>
  );
};

export default Login;
