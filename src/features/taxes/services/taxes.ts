import { get } from '@/lib';
import { Tax } from '@model';

export const URL_TAXES = 'taxes';

export const getTaxes = async (): Promise<Tax[]> => {
  const data = await get<Tax[]>(URL_TAXES);
  return data;
};
