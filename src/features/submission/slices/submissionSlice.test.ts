import { store } from '@store';
import { InputField, Submission } from '@/model';
import { fetchForm, createSubmission } from '../slices';
import { logout } from '../../login';
import { getSubmissionForm, addSubmission } from '../services';

jest.mock('../services');

const taxId = '12345';

afterEach(() => {
  store.dispatch(logout());
});

describe('Tests of the state of the input fields', () => {
  const mockedGettSubmissionForm = getSubmissionForm as jest.Mock<Promise<InputField[]>>;

  const submussionFormResponse: InputField[] = [
    {
      id: 'name',
      label: 'Name',
      placeholder: 'Your first name',
      type: 'text',
      maxLength: 20,
    },
  ];

  it('Initially the submission status must have default values', () => {
    const state = store.getState().submissionReducer;

    expect(state).toEqual({
      loadingFetch: false,
      loadingCreate: false,
      inputFields: [],
      creationError: false,
      createdSubmission: false,
      fetchError: false,
      submissions: {},
    });
  });

  it('Given you have a tax id, when you request your form then you will receive a list of fields', async () => {
    mockedGettSubmissionForm.mockResolvedValue(submussionFormResponse);

    const result = await store.dispatch(fetchForm(taxId));
    const inputFields = result.payload;

    expect(result.type).toBe('form/fetch/fulfilled');
    expect(inputFields).toEqual(submussionFormResponse);

    const state = store.getState().submissionReducer;
    expect(state.inputFields).toEqual(inputFields);
  });

  it('Given there is a network error, when requesting your form you will receive an error', async () => {
    mockedGettSubmissionForm.mockImplementation(() => {
      throw new Error('Error: An error has occurred with the services');
    });

    const result = await store.dispatch(fetchForm(taxId));

    expect(result.type).toBe('form/fetch/rejected');
    expect(result.payload).toBe('Error: An error has occurred with the services');

    const state = store.getState().submissionReducer;
    expect(state.fetchError).toBe(true);
  });
});

describe('Tests of the state of the submission creation', () => {
  const mockedAddSubmission = addSubmission as jest.Mock<Promise<Submission>>;

  const newSubmissionResponse: Submission = {
    id: '1',
    name: 'Carla',
    age: 35,
  };

  it('Given the creation form is completed, when the form is submitted then one is created', async () => {
    mockedAddSubmission.mockResolvedValue(newSubmissionResponse);

    const result = await store.dispatch(createSubmission({ taxId, submission: { id: '1', name: 'Carla', age: 35 } }));
    const submission = result.payload;

    expect(result.type).toBe('submission/post/fulfilled');
    expect(submission).toEqual({ taxId, submission: newSubmissionResponse });

    const state = store.getState().submissionReducer;
    expect(state.submissions).toEqual({
      [taxId]: [{ id: '1', name: 'Carla', age: 35 }],
    });
  });

  it('Given there is a network error, when you submit a form you will receive an error', async () => {
    mockedAddSubmission.mockImplementation(() => {
      throw new Error('Error: An error has occurred with the services');
    });

    const result = await store.dispatch(createSubmission({ taxId, submission: { id: '1', name: 'Carla', age: 35 } }));

    expect(result.type).toBe('submission/post/rejected');
    expect(result.payload).toBe('Error: An error has occurred with the services');

    const state = store.getState().submissionReducer;
    expect(state.creationError).toBe(true);
  });
});
