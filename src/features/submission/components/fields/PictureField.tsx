import React from 'react';
import { HStack, Text, Button, FormControl, Input } from 'native-base';
import { Controller } from 'react-hook-form';
import { IPictureField } from '@model';
import { launchNativeCamera, executeWithPermission } from '@/utils';
import { IBaseField } from '../Field';

export type PictureFieldProps = IPictureField & IBaseField;

const PictureField = ({ id, label, errors, control, disabled }: PictureFieldProps) => {
  const takePhoto = (onChange: (...event: any[]) => void) => {
    executeWithPermission(() => launchNativeCamera(onChange));
  };

  return (
    <Controller
      key={id}
      name={id}
      control={control}
      rules={{ required: true }}
      render={({ field: { onChange, value } }) => (
        <FormControl isRequired isInvalid={id in errors} marginBottom="2">
          <FormControl.Label _text={{ bold: true }}>{label}</FormControl.Label>
          <Button marginTop="2" colorScheme="secondary" isDisabled={disabled} onPress={() => takePhoto(onChange)}>
            Take a picture
          </Button>
          <HStack marginTop={2} justifyItems="center" alignItems="center" justifyContent="space-between">
            <Text>Path: </Text>
            <Input value={value} variant="unstyled" height={'7'} width="80%" padding={0} numberOfLines={1} isDisabled />
          </HStack>

          {id in errors && <FormControl.ErrorMessage>Debe capturar una foto</FormControl.ErrorMessage>}
        </FormControl>
      )}
    />
  );
};

export default PictureField;
