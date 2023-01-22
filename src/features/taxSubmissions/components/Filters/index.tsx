import React, { useState } from 'react';
import { VStack, Button } from 'native-base';
import { useAppDispatch } from '@hooks';
import { setFilter } from '../../slices';
import type { FilterKeys, FilterData } from '../../types';
import InputFilter from '../InputFilter';

export type FilterValues = Record<FilterKeys, string>;

type FiltersProps = {
  data: FilterData[];
};

const filterInitiaValues: FilterValues = {
  year: '',
  name: '',
  surname: '',
  age: '',
};

const Filters = ({ data }: FiltersProps) => {
  const [filterValues, setFilterValues] = useState<FilterValues>(filterInitiaValues);
  const dispatch = useAppDispatch();

  const onHandleChange = (key: string, value: string) => {
    setFilterValues(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  const onFilter = () => {
    dispatch(setFilter(filterValues));
  };

  return (
    <VStack width="100%" borderWidth={1} rounded="lg" borderColor="coolGray.200" padding={2} background="white">
      {data.map((filter, index) => (
        <InputFilter
          key={`inputFilter-${index}`}
          filterData={filter}
          value={filterValues[filter.id]}
          handleChange={onHandleChange}
        />
      ))}
      <Button size="sm" width="70%" alignSelf="center" marginTop="2" onPress={onFilter}>
        Apply filter
      </Button>
    </VStack>
  );
};

export default Filters;
