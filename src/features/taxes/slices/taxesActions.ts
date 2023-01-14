import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTaxes } from '@services';
import { Tax } from '@/model';
import { AxiosError } from 'axios';

export const fetchTaxes = createAsyncThunk<Tax[]>('taxes/fetch', async (_, { rejectWithValue }) => {
  try {
    const taxes = await getTaxes();
    return taxes;
  } catch (error) {
    const err = error as AxiosError;
    console.error('Error: ', err?.cause?.message ?? 'unknown error');
    return rejectWithValue(true);
  }
});
