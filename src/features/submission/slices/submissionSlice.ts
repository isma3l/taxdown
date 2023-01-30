import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchForm, createSubmission } from './submissionActions';
import { RootState } from '@store';
import { Submission, InputField } from '@model';
import { type SubmissionCreationParams } from './submissionActions';

type SubmissionState = {
  loadingFetch: boolean;
  loadingCreate: boolean;
  creationError: boolean;
  createdSubmission: boolean;
  fetchError: boolean;
  inputFields: InputField[];
  submissions: Record<string, Submission[]>;
};

const initialState: SubmissionState = {
  loadingFetch: false,
  loadingCreate: false,
  inputFields: [],
  creationError: false,
  createdSubmission: false,
  fetchError: false,
  submissions: {},
};

const submissionSlice = createSlice({
  name: 'submissionReducer',
  initialState,
  reducers: {
    resetFlags: state => {
      state.createdSubmission = false;
      state.creationError = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchForm.pending, state => {
      state.loadingFetch = true;
      state.fetchError = false;
      state.createdSubmission = false;
      state.creationError = false;
    });
    builder.addCase(fetchForm.fulfilled, (state, action: PayloadAction<InputField[]>) => {
      state.loadingFetch = false;
      state.fetchError = false;
      state.inputFields = action.payload;
    });
    builder.addCase(fetchForm.rejected, state => {
      state.loadingFetch = false;
      state.fetchError = true;
    });
    builder.addCase(createSubmission.pending, state => {
      state.loadingCreate = true;
      state.creationError = false;
      state.createdSubmission = false;
    });
    builder.addCase(createSubmission.fulfilled, (state, action: PayloadAction<SubmissionCreationParams>) => {
      const { taxId, submission } = action.payload;

      state.submissions[taxId] = state.submissions[taxId] ? [...state.submissions[taxId], submission] : [submission];
      state.creationError = false;
      state.loadingCreate = false;
      state.createdSubmission = true;
    });
    builder.addCase(createSubmission.rejected, state => {
      state.loadingCreate = false;
      state.creationError = true;
      state.createdSubmission = false;
    });
  },
});

export const selectInputFields = (state: RootState) => state.submissionReducer.inputFields;
export const selectLoadingFetch = (state: RootState) => state.submissionReducer.loadingFetch;
export const selectErrorFetch = (state: RootState) => state.submissionReducer.fetchError;
export const selectLoadingCreate = (state: RootState) => state.submissionReducer.loadingCreate;
export const selectSubmissions = (state: RootState) => state.submissionReducer.submissions;
export const selectCreatedSubmission = (state: RootState) => state.submissionReducer.createdSubmission;
export const selectCreationError = (state: RootState) => state.submissionReducer.creationError;

export const { resetFlags } = submissionSlice.actions;

export default submissionSlice.reducer;
