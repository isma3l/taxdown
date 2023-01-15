import React from 'react';
import {
  INumberField,
  NumberField,
  IPictureField,
  PictureField,
  ITextField,
  TextField,
} from './fields';

export interface IBaseField {
  id: string;
  label: string;
}

export interface ITypeNumberField extends INumberField {
  type: 'number';
}

export interface ITypeTextField extends ITextField {
  type: 'text';
}

export interface ITypePictureField extends IPictureField {
  type: 'picture';
}

export type IField = ITypeNumberField | ITypeTextField | ITypePictureField;

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
