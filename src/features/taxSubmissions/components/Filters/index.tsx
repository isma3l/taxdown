import React from 'react';
import { Text, VStack } from 'native-base';
import InputFilter from '../InputFilter';

export type FilterData = {
  id: string;
  label: string;
  width: string;
};

type FiltersProps = {
  data: FilterData[];
  control: any;
};

const Filters = ({ data, control }: FiltersProps) => {
  return (
    <VStack
      width="100%"
      borderWidth={1}
      rounded="lg"
      borderColor="coolGray.200"
      padding={2}
      background="white">
      <Text bold>Filters</Text>
      {data.map(({ id, label, width }, index) => (
        <InputFilter
          key={`filter-${index}`}
          id={id}
          label={label}
          control={control}
          width={width}
        />
      ))}
    </VStack>
  );
};

export default Filters;
