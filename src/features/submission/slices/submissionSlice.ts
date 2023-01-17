import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchForm, createSubmission } from './submissionActions';
import { RootState } from '@store';
import { IField } from '../components/Field';
import { Submission, InputField } from '@model';

type SubmissionState = {
  loading: boolean;
  error: boolean;
  inputFields: InputField[];
  submissions: Submission[];
};

const initialState: SubmissionState = {
  loading: false,
  inputFields: [],
  error: false,
  submissions: [],
};

const submissionSlice = createSlice({
  name: 'submissionReducer',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchForm.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchForm.fulfilled, (state, action: PayloadAction<InputField[]>) => {
      state.loading = false;
      state.error = false;
      state.inputFields = action.payload;
    });
    builder.addCase(fetchForm.rejected, state => {
      state.loading = false;
      state.error = true;
    });
    builder.addCase(createSubmission.pending, state => {
      state.loading = false;
    });
    builder.addCase(createSubmission.fulfilled, (state, action: PayloadAction<Submission>) => {
      state.submissions.push(action.payload);
      state.error = false;
      state.loading = false;
    });
    builder.addCase(createSubmission.rejected, state => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const selectInputFields = (state: RootState) => state.submissionReducer.inputFields;

export const selectSubmissions = (state: RootState) => state.submissionReducer.submissions;

export default submissionSlice.reducer;
