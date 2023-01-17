import React from 'react';
import { Box, HStack, VStack, Text, Button, FormControl, Input } from 'native-base';

export interface IPictureField {
  id: string;
  label: string;
  value: any;
  errors: any;
  onchange: (value: any) => void;
}

const PictureField = ({ id, label, errors, value, onchange }: IPictureField) => {
  const setImagePath = () => {
    onchange('soy una imagen');
  };

  return (
    <Box>
      <VStack>
        <FormControl isRequired isInvalid={id in errors}>
          <FormControl.Label _text={{ bold: true }}>{label}</FormControl.Label>
          <Button mt="2" colorScheme="indigo" onPress={setImagePath}>
            Capturar imagen
          </Button>
          <Input value={value} onChangeText={onchange} variant="unstyled" isDisabled />
          {id in errors && (
            <FormControl.ErrorMessage>Este campo es requerido</FormControl.ErrorMessage>
          )}
        </FormControl>
      </VStack>
    </Box>
  );
};

export default PictureField;
