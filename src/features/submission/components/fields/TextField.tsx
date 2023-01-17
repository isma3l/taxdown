import React from 'react';
import { Box, HStack, VStack, Text, Button, FormControl, Input } from 'native-base';

export interface ITextField {
  id: string;
  label: string;
  placeholder: string;
  maxLength: number;
  value: any;
  errors: any;
  onchange: (value: any) => void;
}

const TextField = ({ id, label, placeholder, value, onchange, errors, maxLength }: ITextField) => {
  const getErrorMessage = (type: string): string => {
    const errorMessage =
      type === 'required' ? 'Este campo es requerido' : `Máximo ${maxLength} caracteres`;
    return errorMessage;
  };

  return (
    <FormControl isRequired isInvalid={id in errors}>
      <FormControl.Label _text={{ bold: true }}>{label}</FormControl.Label>
      <Input placeholder={placeholder} value={value} onChangeText={onchange} />
      {id in errors ? (
        <FormControl.ErrorMessage>{getErrorMessage(errors[id].type)}</FormControl.ErrorMessage>
      ) : (
        <FormControl.HelperText>{`Máximo ${maxLength} caracteres`}</FormControl.HelperText>
      )}
    </FormControl>
  );
};

export default TextField;
