import React from 'react';
import { Box, HStack, VStack, Text, Button, ScrollView, FlatList } from 'native-base';
import TaxItem from '../TaxItem';
import { Tax } from '@/model';

type TaxListProps = {
  taxes: Tax[];
};

const TaxList = ({ taxes }: TaxListProps) => {
  return (
    <Box
      rounded="lg"
      borderColor="coolGray.200"
      borderWidth="1"
      margin={4}
      background="white"
      padding={2}>
      {taxes.length === 0 ? (
        <Box padding={4} justifyContent="center" alignItems="center">
          <Text>No hay impuestos en esta seccion</Text>
        </Box>
      ) : (
        <FlatList data={taxes} renderItem={({ item }) => <TaxItem {...item} />} />
      )}
    </Box>
  );
};

export default TaxList;
