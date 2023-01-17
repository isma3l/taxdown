import { get, post } from '@/lib';
import { IField } from '../components/Field';
import { Submission } from '@/model';

export const getSubmissionForm = async (taxId: string): Promise<IField[]> => {
  const URL = `taxes/${taxId}/form`;
  /*
  const obj: IField[] = [
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
 */
  const { inputFields } = await get<{ inputFields: IField[] }>(URL);
  return inputFields;
};

export const addSubmission = async (submission: Submission): Promise<Submission> => {
  const URL = `tax/${submission.taxId}/form`;
  return await post<Submission, Submission>(URL, submission);
};
