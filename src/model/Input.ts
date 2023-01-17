export interface ITextField {
  id: string;
  label: string;
  placeholder: string;
  type: 'text';
  maxLength: number;
}

export interface INumberField {
  id: string;
  label: string;
  placeholder: string;
  type: 'number';
}

export interface IPictureField {
  id: string;
  label: string;
  type: 'picture';
}

export type InputField = ITextField | INumberField | IPictureField;
