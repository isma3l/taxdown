import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { User } from '@model';
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

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    restoreSession: (state, action: PayloadAction<User>) => {
      state.email = action.payload.email;
      state.isLoggedIn = true;
    },
    logout: () => {},
  },
  extraReducers: builder => {
    builder.addCase(signIn.pending, state => {
      state.loading = true;
    });
    builder.addCase(signIn.fulfilled, (state, action: PayloadAction<User>) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.email = action.payload.email;
    });
  },
});

export const { restoreSession, logout } = authSlice.actions;
export const selectLoading = (state: RootState) => state.auth.loading;
export const selectEmail = (state: RootState) => state.auth.email;
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export default authSlice.reducer;
