import { Submission } from '@model';

export interface ITaxSubmission {
  id: string;
  name: string;
  year: string;
  active: boolean;
  submissions: Submission[];
}

export type FilterKeys = 'year' | 'name' | 'surname' | 'age';

export type FilterData = {
  id: FilterKeys;
  label: string;
  width: string;
};
