import React from 'react';
import { useSelector } from 'react-redux';
import { Image } from 'react-native';
import { Box, Button, VStack } from 'native-base';
import { useForm } from 'react-hook-form';
import { userEmailRegex } from '@/utils';
import images from '@images';
import { useAppDispatch } from '@hooks';
import { signIn, selectLoading } from './slices';
import type { Credentials } from './types';
import styles from './styles';
import { CustomInput } from '@components';

const Login = () => {
  const dispatch = useAppDispatch();
  const loading = useSelector(selectLoading);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Credentials>();

  const onSubmit = (credentials: Credentials) => {
    dispatch(signIn(credentials));
  };

  const errorMessageEmail = {
    required: 'This field is required',
    pattern: 'The email entered is not valid',
  };

  const errorMessagePassword = {
    required: 'This field is required',
  };

  return (
    <Box safeArea alignItems="center">
      <VStack width="80%" marginTop="20">
        <Image source={images.logo} style={styles.logo} />
        <CustomInput
          id={'email'}
          label={'Email'}
          errors={errors}
          control={control}
          disabled={loading}
          errorMessages={errorMessageEmail}
          rules={{ required: true, pattern: userEmailRegex }}
        />
        <CustomInput
          id={'password'}
          label={'Password'}
          errors={errors}
          control={control}
          disabled={loading}
          errorMessages={errorMessagePassword}
          rules={{ required: true }}
          textType="password"
        />
        <Button mt="2" marginTop={8} disabled={loading} isLoading={loading} onPress={handleSubmit(onSubmit)}>
          Sign in
        </Button>
      </VStack>
    </Box>
  );
};

export default Login;
