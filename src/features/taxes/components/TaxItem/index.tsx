import React from 'react';
import { Box, HStack, VStack, Text, Button } from 'native-base';
import { navigate } from '@navigation/RootNavigation';
import { SUBMISSION } from '@navigation/Routes';

type TaxItemProps = {
  id: string;
  name: string;
  year: string;
};

const TaxItem = ({ name, year, id }: TaxItemProps) => {
  return (
    <Box marginBottom={4}>
      <HStack justifyContent="space-between" paddingX={2}>
        <VStack>
          <Text color="coolGray.600" bold>
            {name}
          </Text>
          <Text color="coolGray.400" fontSize="xs">
            {year}
          </Text>
        </VStack>
        <Button
          variant="outline"
          size="xs"
          height="6"
          width="16"
          padding="1"
          alignSelf="center"
          color="black"
          onPress={() => navigate(SUBMISSION, { taxId: id })}>
          Add
        </Button>
      </HStack>
    </Box>
  );
};

export default TaxItem;
