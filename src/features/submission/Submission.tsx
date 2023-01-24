import React, { useEffect } from 'react';
import { Box, Button, VStack } from 'native-base';
import { useForm } from 'react-hook-form';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/StackNavigator';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { Submission as ISubmission } from '@model';
import { Loading } from '@components';
import { selectInputFields, fetchForm, createSubmission, selectLoadingFetch, selectLoadingCreate } from './slices';
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
  const inputsFields = useTypedSelector(selectInputFields);
  const loadingFetch = useTypedSelector(selectLoadingFetch);
  const loadingCreate = useTypedSelector(selectLoadingCreate);

  useEffect(() => {
    dispatch(fetchForm(taxId));
  }, [dispatch, taxId]);

  const onSubmit = (submission: ISubmission) => {
    dispatch(createSubmission({ submission, taxId }));
  };

  const fields = inputsFields.map((inputField, index) => (
    <Field key={index} {...inputField} control={control} errors={errors} disabled={loadingCreate} />
  ));

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
        {loadingFetch ? (
          <Loading />
        ) : (
          <>
            <VStack width="100%" paddingX="8" paddingTop="4">
              {fields}
            </VStack>
            <Button
              mt="2"
              colorScheme="indigo"
              marginBottom="8"
              marginX="16"
              isLoading={loadingCreate}
              isLoadingText="Submitting"
              onPress={handleSubmit(onSubmit)}>
              Create submission
            </Button>
          </>
        )}
      </Box>
    </VStack>
  );
};

export default Submission;
