import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Input } from '@model';
import { fetchForm } from './submissionActions';
import { RootState } from '@store';

type SubmissionState = {
  loading: boolean;
  form: Input[];
  error: boolean;
};

const initialState: SubmissionState = {
  loading: false,
  form: [],
  error: false,
};

const submissionSlice = createSlice({
  name: 'submissionReducer',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchForm.pending, state => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(fetchForm.fulfilled, (state, action: PayloadAction<Input[]>) => {
      state.loading = false;
      state.error = false;
      state.form = action.payload;
    });
    builder.addCase(fetchForm.rejected, state => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const selectorForm = (state: RootState) => state.submissionReducer.form;
export default submissionSlice.reducer;
