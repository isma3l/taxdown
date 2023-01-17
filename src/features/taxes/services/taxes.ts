import { get } from '@/lib';
import { Tax } from '@model';

export const URL_TAXES = 'taxes';

export const getTaxes = async (): Promise<Tax[]> => {
  const obj: Tax[] = [{ id: '1', name: 'Tax season 2020', year: '2020', active: true }];
  //const { taxes } = await get<{ taxes: Tax[] }>(URL_TAXES);
  return obj;
};
