import { get } from '@/lib';
import { Tax } from '@model';

export const URL_TAXES = 'taxes';

export const getTaxes = async (): Promise<Tax[]> => {
  const taxes = [
    {
      id: '1',
      active: true,
      name: 'Tax 1',
      year: '2020',
    },
    {
      id: '2',
      active: true,
      name: 'Tax 2',
      year: '2021',
    },
  ];
  //const { taxes } = await get<{ taxes: Tax[] }>(URL_TAXES);
  return taxes;
};
