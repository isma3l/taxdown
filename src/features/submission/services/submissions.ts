import { get, post } from '@/lib';
import { Submission, InputField } from '@/model';

export const getSubmissionForm = async (taxId: string): Promise<InputField[]> => {
  const URL = `taxes/${taxId}/form`;

  const { inputFields } = await get<any>(URL);
  return inputFields;
};

export const addSubmission = async (taxId: string, submission: Submission): Promise<Submission> => {
  const URL = `tax/${taxId}/form`;
  return await post<Submission, Submission>(URL, submission);
};
