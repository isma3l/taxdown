import { get } from '@/lib';
import { Tax } from '@model';

export const URL_TAXES = 'taxes';

export const getTaxes = async (): Promise<Tax[]> => {
  const { taxes } = await get<{ taxes: Tax[] }>(URL_TAXES);
  return taxes;
};
