import React, { useEffect } from 'react';
import { Box, ScrollView } from 'native-base';
import { Filters, TaxTable } from './components';
import { useTypedSelector, useAppDispatch } from '@hooks';
import { selectFilteredTaxSubmissions, resetFilters } from './slices';
import type { FilterData } from './types';

const filters: FilterData[] = [
  {
    id: 'year',
    label: 'Year',
    width: '60%',
  },
  {
    id: 'name',
    label: 'Name',
    width: '60%',
  },
  {
    id: 'surname',
    label: 'Surname',
    width: '60%',
  },
  {
    id: 'age',
    label: 'Age',
    width: '60%',
  },
];

const TaxSubmissions = () => {
  const filteredTaxSubmissions = useTypedSelector(selectFilteredTaxSubmissions);
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetFilters());
    };
  }, [dispatch]);

  return (
    <Box safeArea alignItems="center" flex="1" paddingX={3} paddingTop="2">
      <Filters data={filters} />
      <ScrollView flex="1" width="100%" margin={2} paddingBottom={3} background="white">
        {filteredTaxSubmissions.map((taxSubmission, index) => (
          <TaxTable key={`header-${index}`} taxSubmission={taxSubmission} />
        ))}
      </ScrollView>
    </Box>
  );
};

export default TaxSubmissions;
