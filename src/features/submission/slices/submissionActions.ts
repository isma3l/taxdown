import { createAsyncThunk } from '@reduxjs/toolkit';
import { getSubmissionForm, addSubmission } from '../services';
import { Submission } from '@model';
import { IField } from '../components/Field';

export const fetchForm = createAsyncThunk<IField[], string>(
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
