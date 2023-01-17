import React from 'react';
import { Box, HStack, VStack, Text, Button, ScrollView, FlatList } from 'native-base';
import TaxItem from '../TaxItem';
import { Tax } from '@/model';

type TaxListProps = {
  taxes: Tax[];
  showActive: boolean;
};

const TaxList = ({ taxes, showActive }: TaxListProps) => {
  const list = taxes.filter(tax => tax.active === showActive);
  return (
    <Box
      rounded="lg"
      borderColor="coolGray.200"
      borderWidth="1"
      margin={4}
      background="white"
      padding={2}>
      <FlatList data={list} renderItem={({ item }) => <TaxItem {...item} />} />
    </Box>
  );
};

export default TaxList;
