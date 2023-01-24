import { createAsyncThunk } from '@reduxjs/toolkit';
import { getSubmissionForm, addSubmission } from '../services';
import { Submission, InputField } from '@model';

export const fetchForm = createAsyncThunk<InputField[], string>('form/fetch', async (taxId, { rejectWithValue }) => {
  try {
    return await getSubmissionForm(taxId);
  } catch (error) {
    console.error('An error has occurred with the services');
    return rejectWithValue(true);
  }
});

export type SubmissionCreationParams = { taxId: string; submission: Submission };

export const createSubmission = createAsyncThunk<SubmissionCreationParams, SubmissionCreationParams>(
  'submission/post',
  async ({ taxId, submission }, { rejectWithValue }) => {
    try {
      console.log('params: ', taxId, submission);
      const newSubmission = await addSubmission(taxId, submission);
      return { taxId, submission: newSubmission };
    } catch (error) {
      console.error('An error has occurred with the services');
      return rejectWithValue(true);
    }
  },
);
