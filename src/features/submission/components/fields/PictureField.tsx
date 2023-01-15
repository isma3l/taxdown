import React from 'react';
import { Box, HStack, VStack, Text, Button } from 'native-base';

import { IBaseField } from '../Field';

export interface IPictureField extends IBaseField {
  placeholder: string;
}

const PictureField = ({ id, label }: IPictureField) => {
  return (
    <Box>
      <VStack>
        <Text>Soy PICTURE</Text>
        <Text>{id}</Text>
        <Text>{label}</Text>
      </VStack>
    </Box>
  );
};

export default PictureField;
