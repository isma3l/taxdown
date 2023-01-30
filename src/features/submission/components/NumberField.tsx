import React from 'react';
import { INumberField } from '@model';
import { IBaseField } from './Field';
import { CustomInput } from '@components';
import { ageRangeRegex } from '@/utils';

export type NumberFieldProps = INumberField & IBaseField;

const NumberField = ({ id, label, placeholder, control, errors, disabled }: NumberFieldProps) => {
  const errorMessages = {
    required: 'This field is required',
    pattern: 'Only valid ages',
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
      helperText={'Only ages between 17 and 120 years old'}
    />
  );
};

export default NumberField;
