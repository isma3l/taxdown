import { apiClient } from '../config';
import { URL_TAXES } from './constants';
import { Tax } from '@/model';

export const getTaxes = async (): Promise<Tax[]> => {
  const { data } = await apiClient.get(URL_TAXES);
  return data;
};
