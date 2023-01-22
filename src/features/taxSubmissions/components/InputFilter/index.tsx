import React from 'react';
import { HStack, Text, Input } from 'native-base';
import type { FilterData } from '../../types';

type InputFilterProps = {
  filterData: FilterData;
  value: string;
  handleChange: (id: string, value: string) => void;
};

const InputFilter = ({ filterData, value, handleChange }: InputFilterProps) => {
  const { id, label, width } = filterData;
  return (
    <HStack justifyContent="space-between">
      <Text>{label}</Text>
      <Input
        returnKeyType="done"
        size="xs"
        width={width}
        height="7"
        value={value}
        onChangeText={newValue => handleChange(id, newValue)}
      />
    </HStack>
  );
};

export default InputFilter;
