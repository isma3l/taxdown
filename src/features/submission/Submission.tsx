import React, { useEffect } from 'react';
import { Image } from 'react-native';
import {
  Box,
  Button,
  HStack,
  Text,
  IconButton,
  Icon,
  FormControl,
  Input,
  VStack,
} from 'native-base';
import { useAppDispatch, useTypedSelector } from '@/hooks';
import { selectorForm, fetchForm } from './slices';

import images from '@images';
//import { AntDesign } from '@expo/vector-icons';
//import styles from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Field } from './components';

const Submission = () => {
  const dispatch = useAppDispatch();
  const form = useTypedSelector(selectorForm);
  console.log('form: ', form);

  useEffect(() => {
    dispatch(fetchForm('lala'));
  }, [dispatch]);

  const label = 'Name';
  const placeholder = 'soy un placeholder';
  const data = [
    {
      id: 'name',
      label: 'Name',
      placeholder: 'Your first name',
      type: 'text',
      maxLength: 20,
    },
    {
      id: 'surname',
      label: 'Surname',
      placeholder: 'Your last name',
      type: 'text',
      maxLength: 40,
    },
    {
      id: 'age',
      label: 'Age',
      placeholder: 'Your age',
      type: 'number',
    },
    {
      id: 'picture',
      label: 'Picture',
      type: 'picture',
    },
  ];
  return (
    <Box safeArea flex="1" alignItems="center">
      <VStack space={4} width="80%" marginTop={20}>
        <FormControl isRequired>
          <FormControl.Label>{label}</FormControl.Label>
          <Input placeholder={placeholder} />
        </FormControl>
        {form.map((input, index) => {
          const obj = { ...input, type: 'text' };
          return <Field key={index} {...obj} />;
        })}
        <Button mt="2" colorScheme="indigo" marginTop={8}>
          Creaacion de impuestos
        </Button>
      </VStack>
    </Box>
  );
};

export default Submission;
