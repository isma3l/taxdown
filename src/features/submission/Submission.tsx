import React, { useEffect } from 'react';
import { Image } from 'react-native';
import { Box, Button, HStack, Text, IconButton, Icon, FormControl, VStack } from 'native-base';
import { useFormik } from 'formik';
import { useForm, Controller } from 'react-hook-form';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/StackNavigator';

import { useAppDispatch, useTypedSelector } from '@/hooks';
import { selectorForm, fetchForm, createSubmission } from './slices';

import images from '@images';
//import { AntDesign } from '@expo/vector-icons';
//import styles from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Field } from './components';
import { Input } from '@/model';

type SubmissionProps = NativeStackScreenProps<RootStackParamList, 'Submission'>;

type Rules = {
  required: boolean;
  maxLength?: number;
  pattern?: any;
};

const Submission = ({ route }: SubmissionProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useAppDispatch();
  const { taxId } = route?.params;
  const inputsFields = useTypedSelector(selectorForm);

  useEffect(() => {
    console.log('pide form');
    dispatch(fetchForm('lala'));
  }, [dispatch]);

  const generateRules = (input: Input): Rules => {
    const { type } = input;
    let rules: Rules = {
      required: true,
    };
    if (type === 'text') {
      rules.maxLength = 4; //input.maxLength;
    }

    if (type === 'number') {
      rules.pattern = /^(0|[1-9][0-9]*)$/;
    }

    return rules;
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const dynamicFields = inputsFields.map((input, index) => {
    const rules = generateRules(input);
    return (
      <Controller
        key={index}
        name={input.id}
        control={control}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <Field key={index} {...input} onchange={onChange} value={value} errors={errors} />
        )}
      />
    );
  });

  return (
    <VStack safeArea flex="1">
      <Box
        rounded="lg"
        borderColor="coolGray.200"
        borderWidth="1"
        flex="1"
        margin={4}
        justifyContent="space-between"
        background="white"
        width="90%">
        <VStack space={10} width="100%" padding="8">
          {dynamicFields}
        </VStack>
        <Button
          mt="2"
          colorScheme="indigo"
          marginBottom="8"
          marginX="16"
          onPress={handleSubmit(onSubmit)}>
          Create submission
        </Button>
      </Box>
    </VStack>
  );
};

/*
<Box safeArea flex="1" alignItems="center">
      <VStack space={4} width="80%" marginTop={20}>
        {fields.map((input, index) => (
          <Field key={index} {...input} />
        ))}
        <Button
          mt="2"
          colorScheme="indigo"
          marginTop={8}
          onPress={() =>
            dispatch(
              createSubmission({
                taxId: '1',
                name: 'pelusa',
                surname: 'gata',
                age: 12,
                picture: 'imagen',
              }),
            )
          }>
          Creaacion de impuestos
        </Button>
      </VStack>
    </Box>
*/
export default Submission;
