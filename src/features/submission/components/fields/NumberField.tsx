import React from 'react';
import { FormControl, Input } from 'native-base';
import { Controller } from 'react-hook-form';
import { INumberField } from '@model';
import { IBaseField } from '../Field';

export type NumberFieldProps = INumberField & IBaseField;

const NumberField = ({ id, label, placeholder, control, errors }: NumberFieldProps) => {
  const getErrorMessage = (type: string): string => {
    const errorMessage =
      type === 'required' ? 'Este campo es requerido' : 'Solo se permiten números';
    return errorMessage;
  };

  return (
    <Controller
      key={id}
      name={id}
      control={control}
      rules={{ required: true, pattern: /^(0|[1-9][0-9]*)$/ }}
      render={({ field: { onChange, value } }) => (
        <FormControl isRequired isInvalid={id in errors} marginBottom="2">
          <FormControl.Label _text={{ bold: true }}>{label}</FormControl.Label>
          <Input
            placeholder={placeholder}
            value={value}
            onChangeText={onChange}
            keyboardType="numeric"
            returnKeyType="done"
          />
          {id in errors ? (
            <FormControl.ErrorMessage>{getErrorMessage(errors[id].type)}</FormControl.ErrorMessage>
          ) : (
            <FormControl.HelperText>Solo se permiten números</FormControl.HelperText>
          )}
        </FormControl>
      )}
    />
  );
};

export default NumberField;
