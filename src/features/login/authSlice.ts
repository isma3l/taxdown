import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, UserCredentials, AuthRequest, AuthResponse } from './types';
import { navigate } from '@navigation/RootNavigation';
import { RootState } from '@/store';

const initialState: AuthState = {
  user: { email: '' },
  loading: false,
  isLoggedIn: false,
};

export const signIn = createAsyncThunk<AuthRequest, AuthResponse>(
  'auth/signIn',
  async (params: UserCredentials) => {
    await new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, 1500);
    });
    navigate('Dashboard');
    return params;
  },
);

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(signIn.pending, state => {
      state.loading = true;
    });
    builder.addCase(signIn.fulfilled, (state, action: PayloadAction<UserCredentials>) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.user.email = action.payload.email;
    });
  },
});

export const selectLoading = (state: RootState) => state.auth.loading;

export default AuthSlice.reducer;
