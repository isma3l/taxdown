import React from 'react';
import { INumberField } from '@model';
import { IBaseField } from './Field';
import { CustomInput } from '@components';
import { ageRangeRegex } from '@/utils';

export type NumberFieldProps = INumberField & IBaseField;

const NumberField = ({ id, label, placeholder, control, errors, disabled }: NumberFieldProps) => {
  const errorMessages = {
    required: 'This field is required',
    pattern: 'Only numbers',
  };

  const rules = { required: true, pattern: ageRangeRegex };

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
      helperText={'Only numbers are allowed'}
    />
  );
};

export default NumberField;
