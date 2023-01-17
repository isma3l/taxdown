import { get, post } from '@/lib';
import { IField } from '../components/Field';
import { Submission, InputField } from '@/model';

export const getSubmissionForm = async (taxId: string): Promise<InputField[]> => {
  const URL = `taxes/${taxId}/form`;

  const obj: InputField[] = [
    {
      id: 'name',
      label: 'Name',
      placeholder: 'Your first name',
      type: 'text',
      maxLength: 20,
    },
    {
      id: 'surname',
      label: 'Surname',
      placeholder: 'Your last name',
      type: 'text',
      maxLength: 40,
    },
    {
      id: 'age',
      label: 'Age',
      placeholder: 'Your age',
      type: 'number',
    },
    {
      id: 'picture',
      label: 'Picture',
      type: 'picture',
    },
  ];

  //const { inputFields } = await get<{ inputFields: InputField[] }>(URL);
  return obj;
};

export const addSubmission = async (submission: Submission): Promise<Submission> => {
  const URL = `tax/${submission.taxId}/form`;
  return await post<Submission, Submission>(URL, submission);
};
