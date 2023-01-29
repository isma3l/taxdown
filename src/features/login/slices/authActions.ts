import { createAsyncThunk } from '@reduxjs/toolkit';
import { Credentials } from '../types';
import { storeData } from '@/lib';
import { User } from '@model';
import { USER_DATA } from '@/constants';
import { resetAndNavigate } from '@navigation/RootNavigation';
import { TAXES } from '@navigation/Routes';

export const signIn = createAsyncThunk<User, Credentials>(
  'auth/signIn',
  async (params: Credentials, { rejectWithValue }) => {
    try {
      await new Promise(resolve => {
        setTimeout(() => {
          resolve(true);
        }, 200);
      });

      const user: User = {
        email: params.email,
      };

      await storeData(USER_DATA, user);
      resetAndNavigate(TAXES);

      return user;
    } catch (error) {
      return rejectWithValue(true);
    }
  },
);
