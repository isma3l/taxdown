import React from 'react';
import { Box, HStack, VStack, Text, Button, FormControl, Input } from 'native-base';
import { Controller } from 'react-hook-form';

export interface ITextField {
  id: string;
  label: string;
  placeholder: string;
  maxLength: number;
  errors: any;
  control: any;
}

const TextField = ({ id, label, placeholder, errors, maxLength, control }: ITextField) => {
  const getErrorMessage = (type: string): string => {
    const errorMessage =
      type === 'required' ? 'Este campo es requerido' : `Máximo ${maxLength} caracteres`;
    return errorMessage;
  };

  return (
    <Controller
      key={id}
      name={id}
      control={control}
      rules={{ required: true, maxLength }}
      render={({ field: { onChange, value } }) => (
        <FormControl isRequired isInvalid={id in errors} marginBottom="2">
          <FormControl.Label _text={{ bold: true }}>{label}</FormControl.Label>
          <Input placeholder={placeholder} value={value} onChangeText={onChange} />
          {id in errors ? (
            <FormControl.ErrorMessage>{getErrorMessage(errors[id].type)}</FormControl.ErrorMessage>
          ) : (
            <FormControl.HelperText>{`Máximo ${maxLength} caracteres`}</FormControl.HelperText>
          )}
        </FormControl>
      )}
    />
  );
};

export default TextField;
