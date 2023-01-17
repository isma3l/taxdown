import React from 'react';
import { Box, HStack, VStack, Text, Button, FormControl, Input } from 'native-base';

export interface INumberField {
  id: string;
  label: string;
  placeholder: string;
  value: any;
  errors: any;
  onchange: (value: any) => void;
}

const NumberField = ({ id, label, placeholder, value, onchange, errors }: INumberField) => {
  const getErrorMessage = (type: string): string => {
    const errorMessage =
      type === 'required' ? 'Este campo es requerido' : 'Solo se permiten números';
    return errorMessage;
  };

  console.log(errors);
  return (
    <FormControl isRequired isInvalid={id in errors}>
      <FormControl.Label>{label}</FormControl.Label>
      <Input
        placeholder={placeholder}
        value={value}
        onChangeText={onchange}
        keyboardType="numeric"
        returnKeyType="done"
      />
      {id in errors && (
        <FormControl.ErrorMessage>{getErrorMessage(errors[id].type)}</FormControl.ErrorMessage>
      )}
    </FormControl>
  );
};

export default NumberField;
