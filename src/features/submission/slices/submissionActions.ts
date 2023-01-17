import { createAsyncThunk } from '@reduxjs/toolkit';
import { getSubmissionForm, addSubmission } from '../services';
import { Submission, InputField } from '@model';

export const fetchForm = createAsyncThunk<InputField[], string>(
  'form/fetch',
  async (taxId, { rejectWithValue }) => {
    try {
      const form = await getSubmissionForm(taxId);
      return form;
    } catch (error) {
      console.error('An error has occurred with the services');
      return rejectWithValue(true);
    }
  },
);

export const createSubmission = createAsyncThunk<Submission, Submission>(
  'submission/post2',
  async (submission, { rejectWithValue }) => {
    try {
      return await addSubmission(submission);
    } catch (error) {
      console.error('An error has occurred with the services');
      return rejectWithValue(true);
    }
  },
);
