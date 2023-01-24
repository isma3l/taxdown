import { get, post } from '@/lib';
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
  return obj;
  //const { inputFields } = await get<any>(URL);
  //return inputFields;
};

export const addSubmission = async (taxId: string, submission: Submission): Promise<Submission> => {
  const URL = `tax/${taxId}/form`;
  return await post<Submission, Submission>(URL, submission);
};
