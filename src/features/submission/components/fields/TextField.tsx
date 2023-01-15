import React from 'react';
import { Box, HStack, VStack, Text, Button } from 'native-base';

import { IBaseField } from '../Field';

export interface ITextField extends IBaseField {
  placeholder: string;
  maxLength: string;
}

const TextField = ({ id, label, placeholder, maxLength }: ITextField) => {
  return (
    <Box>
      <VStack>
        <Text>Soy TEXT</Text>
        <Text>{id}</Text>
        <Text>{label}</Text>
        <Text>{placeholder}</Text>
        <Text>{maxLength}</Text>
      </VStack>
    </Box>
  );
};

export default TextField;
