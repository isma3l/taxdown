import React from 'react';
import { FormControl, Input } from 'native-base';
import { Controller } from 'react-hook-form';
import { ITextField } from '@model';
import { IBaseField } from '../Field';

export type TextFieldProps = ITextField & IBaseField;

const TextField = ({
  id,
  label,
  placeholder,
  errors,
  maxLength,
  control,
  disabled,
}: TextFieldProps) => {
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
          <Input
            placeholder={placeholder}
            value={value}
            onChangeText={onChange}
            isDisabled={disabled}
          />
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
