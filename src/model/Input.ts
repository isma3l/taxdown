export type Input = {
  id: string;
  label: string;
  type: string;
  maxLength?: number;
  placeholder?: string;
};

export type TypeInput = 'number' | 'text' | 'picture';
