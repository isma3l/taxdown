import { get } from '@/lib';
import { Input } from '@model';

export const getForm = async (id: string): Promise<Input[]> => {
  const data = await get<Input[]>(`taxes/${id}/form`);
  return data;
};
