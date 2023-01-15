import { createAsyncThunk } from '@reduxjs/toolkit';
import { getForm } from '../services';
import { Input } from '@model';

export const fetchForm = createAsyncThunk<Input[], string>(
  'form/fetch',
  async (id, { rejectWithValue }) => {
    try {
      const form = await getForm(id);
      return form;
    } catch (error) {
      console.error('An error has occurred with the services');
      return rejectWithValue(true);
    }
  },
);
