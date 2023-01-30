import React, { useEffect } from 'react';
import { Box, Button, Text, VStack } from 'native-base';
import { useForm } from 'react-hook-form';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/StackNavigator';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { Submission as ISubmission } from '@model';
import { Loading, CustomModal } from '@components';
import {
  selectInputFields,
  fetchForm,
  createSubmission,
  selectLoadingFetch,
  selectLoadingCreate,
  selectCreatedSubmission,
  selectErrorFetch,
  resetFlags,
  selectCreationError,
} from './slices';
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
  const errorFetch = useTypedSelector(selectErrorFetch);
  const loadingCreate = useTypedSelector(selectLoadingCreate);
  const createdSubmission = useTypedSelector(selectCreatedSubmission);
  const creationError = useTypedSelector(selectCreationError);

  useEffect(() => {
    dispatch(fetchForm(taxId));
  }, [dispatch, taxId]);

  const onSubmit = (submission: ISubmission) => {
    dispatch(createSubmission({ submission, taxId }));
  };

  const fields = inputsFields.map((inputField, index) => (
    <Field key={index} {...inputField} control={control} errors={errors} disabled={loadingCreate} />
  ));

  // Could be moved to a separate file, especially if some internationalization framework will be used
  const modalContent = {
    successfulCreation: {
      title: 'Successful creation',
      body: 'Submission was successfully uploaded',
    },
    wrongCreation: {
      title: 'Error',
      body: 'The submission was not loaded correctly',
    },
  };

  const showModal = creationError || createdSubmission;
  const modalData = creationError
    ? modalContent.wrongCreation
    : createdSubmission
    ? modalContent.successfulCreation
    : null;

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
        ) : errorFetch ? (
          <Text fontWeight="semibold" color="red.500" margin="3">
            An error occurred while obtaining the form
          </Text>
        ) : inputsFields.length === 0 ? (
          <Text margin="3" fontWeight="semibold">
            No forms at this time
          </Text>
        ) : (
          <>
            <VStack width="100%" paddingX="8" paddingTop="4">
              {fields}
            </VStack>
            <Button
              mt="2"
              marginBottom="8"
              marginX="16"
              isLoading={loadingCreate}
              isLoadingText="Submitting"
              onPress={handleSubmit(onSubmit)}>
              Create submission
            </Button>
            <CustomModal
              title={modalData ? modalData.title : ''}
              body={modalData ? modalData.body : ''}
              isVisible={showModal}
              hideModal={() => dispatch(resetFlags())}
            />
          </>
        )}
      </Box>
    </VStack>
  );
};

export default Submission;
