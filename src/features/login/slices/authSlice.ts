import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Credentials } from '../types';
import { RootState } from '@/store';
import { signIn } from './authActions';

type AuthState = {
  email: string;
  loading: boolean;
  isLoggedIn: boolean;
};

const initialState: AuthState = {
  email: '',
  loading: false,
  isLoggedIn: false,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(signIn.pending, state => {
      state.loading = true;
    });
    builder.addCase(signIn.fulfilled, (state, action: PayloadAction<Credentials>) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.email = action.payload.email;
    });
  },
});

export const selectLoading = (state: RootState) => state.auth.loading;

export default AuthSlice.reducer;
