import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchForm, createSubmission } from './submissionActions';
import { RootState } from '@store';
import { Submission, InputField } from '@model';

type SubmissionState = {
  loadingFetch: boolean;
  loadingCreate: boolean;
  error: boolean;
  inputFields: InputField[];
  submissions: Submission[];
};

const initialState: SubmissionState = {
  loadingFetch: false,
  loadingCreate: false,
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
      state.loadingFetch = true;
      state.error = false;
    });
    builder.addCase(fetchForm.fulfilled, (state, action: PayloadAction<InputField[]>) => {
      state.loadingFetch = false;
      state.error = false;
      state.inputFields = action.payload;
    });
    builder.addCase(fetchForm.rejected, state => {
      state.loadingFetch = false;
      state.error = true;
    });
    builder.addCase(createSubmission.pending, state => {
      state.loadingCreate = false;
      state.error = false;
    });
    builder.addCase(createSubmission.fulfilled, (state, action: PayloadAction<Submission>) => {
      state.submissions.push(action.payload);
      state.error = false;
      state.loadingCreate = false;
    });
    builder.addCase(createSubmission.rejected, state => {
      state.loadingCreate = false;
      state.error = true;
    });
  },
});

export const selectInputFields = (state: RootState) => state.submissionReducer.inputFields;

export const selectLoadingFetch = (state: RootState) => state.submissionReducer.loadingFetch;

export const selectLoadingCreate = (state: RootState) => state.submissionReducer.loadingCreate;

export const selectSubmissions = (state: RootState) => state.submissionReducer.submissions;

export default submissionSlice.reducer;
