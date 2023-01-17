import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchForm, createSubmission } from './submissionActions';
import { RootState } from '@store';
import { IField } from '../components/Field';
import { Submission } from '@model';

type SubmissionState = {
  loading: boolean;
  error: boolean;
  fields: IField[];
  submissions: Submission[];
};

const initialState: SubmissionState = {
  loading: false,
  fields: [],
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
    builder.addCase(fetchForm.fulfilled, (state, action: PayloadAction<IField[]>) => {
      state.loading = false;
      state.error = false;
      state.fields = action.payload;
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

export const selectorForm = (state: RootState) => state.submissionReducer.fields;
export const selectorSubmissions = (state: RootState) => state.submissionReducer.submissions;
export default submissionSlice.reducer;
