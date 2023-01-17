import React, { useEffect } from 'react';
import { Image } from 'react-native';
import { Box, Button, HStack, Text, IconButton, Icon, FormControl, VStack } from 'native-base';
import { useForm } from 'react-hook-form';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/StackNavigator';

import { useAppDispatch, useTypedSelector } from '@/hooks';
import { selectorForm, fetchForm, createSubmission } from './slices';

import images from '@images';
//import { AntDesign } from '@expo/vector-icons';
//import styles from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Field } from './components';

type SubmissionProps = NativeStackScreenProps<RootStackParamList, 'Submission'>;

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

  const onSubmit = (data: any) => {
    console.log(data);
  };

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
        <VStack width="100%" paddingX="8" paddingTop="4">
          {inputsFields.map((inputField, index) => (
            <Field key={index} {...inputField} control={control} errors={errors} />
          ))}
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

export default Submission;
