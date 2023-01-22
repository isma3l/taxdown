import React from 'react';
import { Box, ScrollView } from 'native-base';
import { Filters, Header } from './components';
import { useTypedSelector } from '@hooks';
import { selectFilteredTaxSubmissions } from './slices';
import type { FilterData } from './components';

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

  return (
    <Box safeArea alignItems="center" flex="1" paddingX={3} paddingTop="2">
      <Filters data={filters} />
      <ScrollView flex="1" width="100%" margin={2} paddingBottom={3} background="white">
        {filteredTaxSubmissions.map((taxSubmission, index) => (
          <Header key={`header-${index}`} taxSubmission={taxSubmission} />
        ))}
      </ScrollView>
    </Box>
  );
};

export default TaxSubmissions;
