import React from 'react';
import { ITextField } from '@model';
import { CustomInput } from '@components';
import { IBaseField } from './Field';

export type TextFieldProps = ITextField & IBaseField;

const TextField = ({ id, label, placeholder, errors, maxLength, control, disabled }: TextFieldProps) => {
  const errorMessages = {
    required: 'This field is required',
    maxLength: `Maximum ${maxLength} characters`,
  };

  const rules = { required: true, maxLength };

  return (
    <CustomInput
      id={id}
      label={label}
      placeholder={placeholder}
      errors={errors}
      control={control}
      disabled={disabled}
      errorMessages={errorMessages}
      rules={rules}
      helperText={`Maximum ${maxLength} characters`}
    />
  );
};

export default TextField;
