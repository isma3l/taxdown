import React from 'react';
import { Image } from 'react-native';
import { useFormik } from 'formik';
import { Box, FormControl, Input, VStack, Button } from 'native-base';
import images from '@images';

import styles from './styles';

interface LoginValues {
  email: string;
  password: string;
}

const LoginScreen = ({ navigation }) => {
  const { handleSubmit, values, setFieldValue } = useFormik<LoginValues>({
    initialValues: { email: '', password: '' },
    onSubmit: valuess => {
      console.log('on submitttt: ', valuess);
    },
  });

  const disabledButton = !(values.email && values.password);

  return (
    <Box safeArea alignItems="center">
      <VStack space={4} width="80%" marginTop="20">
        <Image source={images.logo} style={styles.logo} />
        <FormControl isRequired>
          <FormControl.Label>Email</FormControl.Label>
          <Input onChangeText={value => setFieldValue('email', value)} value={values.email} />
        </FormControl>
        <FormControl isRequired>
          <FormControl.Label>Password</FormControl.Label>
          <Input
            onChangeText={value => setFieldValue('password', value)}
            value={values.password}
            type="password"
          />
        </FormControl>
        <Button
          mt="2"
          colorScheme="indigo"
          marginTop={8}
          isDisabled={disabledButton}
          onPress={() => navigation.navigate('Dashboard')}>
          Sign in
        </Button>
      </VStack>
    </Box>
  );
};

export default LoginScreen;
