import React from 'react';
import { FormControl, Input } from 'native-base';
import { Controller } from 'react-hook-form';
import { KeyboardTypeOptions, ReturnKeyTypeOptions } from 'react-native';

type CustomInputProps = {
  id: string;
  label: string;
  placeholder?: string;
  errors: any;
  control: any;
  disabled?: boolean;
  errorMessages: Record<string, string>;
  rules: any;
  helperText?: string;
  keyboardType?: KeyboardTypeOptions;
  returnKeyType?: ReturnKeyTypeOptions;
};

const CustomInput = ({
  id,
  label,
  placeholder,
  errors,
  control,
  disabled,
  errorMessages,
  rules,
  helperText,
  keyboardType = 'default',
  returnKeyType = 'default',
}: CustomInputProps) => {
  const getErrorMessage = (): string => {
    const { type } = errors[id];
    return errorMessages[type];
  };

  return (
    <Controller
      key={id}
      name={id}
      control={control}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <FormControl isRequired={rules.required} isInvalid={id in errors} marginBottom="2">
          <FormControl.Label _text={{ bold: true }}>{label}</FormControl.Label>
          <Input
            placeholder={placeholder}
            keyboardType={keyboardType}
            returnKeyType={returnKeyType}
            value={value}
            onChangeText={onChange}
            isDisabled={disabled}
          />
          {id in errors ? (
            <FormControl.ErrorMessage>{getErrorMessage()}</FormControl.ErrorMessage>
          ) : (
            <FormControl.HelperText>{helperText}</FormControl.HelperText>
          )}
        </FormControl>
      )}
    />
  );
};

export default CustomInput;
