import { createAsyncThunk } from '@reduxjs/toolkit';
import { Credentials } from '../types';
import { navigate } from '@navigation/RootNavigation';
import { TAXES } from '@navigation/Routes';

export const signIn = createAsyncThunk<Credentials, Credentials>('auth/signIn', async (params: Credentials) => {
  await new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, 200);
  });
  navigate(TAXES);
  return params;
});
