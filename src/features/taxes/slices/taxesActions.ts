import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTaxes } from '../services';
import { Tax } from '@/model';

export const fetchTaxes = createAsyncThunk<Tax[]>('taxes/fetch', async (_, { rejectWithValue }) => {
  try {
    const taxes = await getTaxes();
    return taxes;
  } catch (error: any) {
    console.log('errrororororro');
    return rejectWithValue(error.message);
  }
});
