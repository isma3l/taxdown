import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchForm, createSubmission } from './submissionActions';
import { RootState } from '@store';
import { Submission, InputField } from '@model';
import { type SubmissionCreationParams } from './submissionActions';

type SubmissionState = {
  loadingFetch: boolean;
  loadingCreate: boolean;
  error: boolean;
  inputFields: InputField[];
  submissions: Record<string, Submission[]>;
};

const initialState: SubmissionState = {
  loadingFetch: false,
  loadingCreate: false,
  inputFields: [],
  error: false,
  submissions: {},
};
/*
{
    '1': [
      { id: 's1', name: 'Pedro', surname: 'Vasquez', age: 23 },
      { id: 's2', name: 'Marcos', surname: 'Luna', age: 34 },
      { id: 's3', name: 'Luisa de lima peru', surname: 'Juliacaa', age: 29 },
      { id: 's4', name: 'Lucho', surname: 'Salsa', age: 42 },
    ],
    '2': [
      { id: 's5', name: 'Carlos', surname: 'Poesa', age: 13 },
      { id: 's6', name: 'Huawey', surname: 'Eronwa' },
      { id: 's7', name: 'Simpatica', surname: 'Dario', age: 79 },
      { id: 's8', name: 'Corazon', surname: 'Arian' },
      { id: 's9', name: 'Lucho', surname: 'Barros' },
    ],
  },
*/

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
      state.loadingCreate = true;
      state.error = false;
    });
    builder.addCase(createSubmission.fulfilled, (state, action: PayloadAction<SubmissionCreationParams>) => {
      const { taxId, submission } = action.payload;

      state.submissions[taxId] = state.submissions[taxId] ? [...state.submissions[taxId], submission] : [submission];
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
