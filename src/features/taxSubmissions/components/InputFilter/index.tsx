import React from 'react';
import { HStack } from 'native-base';
import { FormControl, Input } from 'native-base';
import { Controller } from 'react-hook-form';

type InputFilterProps = {
  id: string;
  label: string;
  control: any;
  width?: string;
};

const InputFilter = ({ id, label, control, width }: InputFilterProps) => {
  return (
    <Controller
      key={id}
      name={id}
      control={control}
      render={({ field: { onChange, value } }) => (
        <FormControl>
          <HStack justifyContent="space-between">
            <FormControl.Label>{label}</FormControl.Label>
            <Input
              value={value}
              onChangeText={onChange}
              returnKeyType="done"
              height={7}
              size="xs"
              width={width}
            />
          </HStack>
        </FormControl>
      )}
    />
  );
};

export default InputFilter;
