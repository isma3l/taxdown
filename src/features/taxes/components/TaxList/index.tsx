import React from 'react';
import { Box, Spinner, FlatList } from 'native-base';
import { Tax } from '@/model';
import { useTypedSelector } from '@/hooks';
import { selectLoading } from '../../slices';
import TaxItem from '../TaxItem';

type TaxListProps = {
  taxes: Tax[];
};

const TaxList = ({ taxes }: TaxListProps) => {
  const loading = useTypedSelector(selectLoading);

  return (
    <Box rounded="lg" borderColor="coolGray.200" borderWidth="1" flex="1" margin={4} background="white" padding={2}>
      {loading ? (
        <Box justifyContent="center" alignItems="center" flex="1">
          <Spinner size="lg" />
        </Box>
      ) : (
        <FlatList data={taxes} keyExtractor={item => item.id} renderItem={({ item }) => <TaxItem {...item} />} />
      )}
    </Box>
  );
};

export default TaxList;
