import React from 'react';
import {
  NumberField,
  NumberFieldProps,
  PictureField,
  PictureFieldProps,
  TextField,
  TextFieldProps,
} from './fields';

export interface IBaseField {
  control: any;
  errors: any;
  disabled: boolean;
}

export type IField = NumberFieldProps | PictureFieldProps | TextFieldProps;

export const Field = (props: IField) => {
  switch (props.type) {
    case 'number': {
      return <NumberField {...props} />;
    }
    case 'picture': {
      return <PictureField {...props} />;
    }
    case 'text': {
      return <TextField {...props} />;
    }
    default:
      return null;
  }
};
