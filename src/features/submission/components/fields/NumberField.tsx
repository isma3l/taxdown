import React from 'react';
import { Box, HStack, VStack, Text, Button } from 'native-base';

import { IBaseField } from '../Field';

export interface INumberField extends IBaseField {
  placeholder: string;
}

const NumberField = ({ id, label, placeholder }: INumberField) => {
  return (
    <Box>
      <VStack>
        <Text>SOY NUMBER</Text>
        <Text>{id}</Text>
        <Text>{label}</Text>
        <Text>{placeholder}</Text>
      </VStack>
    </Box>
  );
};

export default NumberField;
