import { get, post } from '@/lib';
import { IField } from '../components/Field';
import { Submission } from '@/model';

export const getSubmissionForm = async (taxId: string): Promise<IField[]> => {
  const URL = `taxes/${taxId}/form`;
  const { inputFields } = await get<{ inputFields: IField[] }>(URL);
  return inputFields;
};

export const addSubmission = async (submission: Submission): Promise<Submission> => {
  const URL = `tax/${submission.taxId}/form`;
  return await post<Submission, Submission>(URL, submission);
};
