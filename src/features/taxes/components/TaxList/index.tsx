import React from 'react';
import { Box, Spinner, FlatList, Text } from 'native-base';
import { Tax } from '@/model';
import { useTypedSelector } from '@hooks';
import { selectLoading, selectError } from '../../slices';
import TaxItem from '../TaxItem';

type TaxListProps = {
  taxes: Tax[];
};

const TaxList = ({ taxes }: TaxListProps) => {
  const loading = useTypedSelector(selectLoading);
  const hasError = useTypedSelector(selectError);

  return (
    <Box rounded="lg" borderColor="coolGray.200" borderWidth="1" flex="1" margin={4} background="white" padding={2}>
      {loading ? (
        <Box justifyContent="center" alignItems="center" flex="1">
          <Spinner size="lg" testID="testID-spinner" />
        </Box>
      ) : (
        <FlatList
          testID="testID-taxes"
          data={taxes}
          ListEmptyComponent={() => {
            if (hasError) {
              return (
                <Text testID="testID-error" fontWeight="semibold" color="red.500">
                  An error occurred when obtaining taxes
                </Text>
              );
            }
            return (
              <Text testID="testID-emptyList" fontWeight="semibold">
                No taxes available
              </Text>
            );
          }}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TaxItem {...item} />}
        />
      )}
    </Box>
  );
};

export default TaxList;
