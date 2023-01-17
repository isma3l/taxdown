import React from 'react';
import { Box, HStack, VStack, Text, Button, FormControl, Input } from 'native-base';
import { launchCamera, MediaType } from 'react-native-image-picker';

import { Controller } from 'react-hook-form';

export interface IPictureField {
  id: string;
  label: string;
  errors: any;
  control: any;
}

const PictureField = ({ id, label, errors, control }: IPictureField) => {
  const setImagePath = (onChange: any) => {
    onChange('soy una imagen');
  };

  const launchNativeCamera = async (callback: (result: string) => void) => {
    const mediaType: MediaType = 'mixed';

    let options = {
      saveToPhotos: true,
      mediaType: mediaType,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    await launchCamera(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const path = response?.assets[0].uri ?? 'no hay';
        console.log('path: ', path);
        callback(path);
      }
    });
  };

  /*
       onPress={() => {
              setImagePath(onChange);
            }}>
  */
  return (
    <Controller
      key={id}
      name={id}
      control={control}
      rules={{ required: true }}
      render={({ field: { onChange, value } }) => (
        <FormControl isRequired isInvalid={id in errors} marginBottom="2">
          <FormControl.Label _text={{ bold: true }}>{label}</FormControl.Label>
          <Button mt="2" colorScheme="indigo" onPress={() => launchNativeCamera(onChange)}>
            Capturar imagen
          </Button>
          <HStack
            marginTop={2}
            justifyItems="center"
            alignItems="center"
            justifyContent="space-between">
            <Text>Path: </Text>
            <Input
              value={value}
              variant="unstyled"
              height={'7'}
              width="80%"
              padding={0}
              numberOfLines={1}
              isDisabled
            />
          </HStack>

          {id in errors && (
            <FormControl.ErrorMessage>Debe capturar una foto</FormControl.ErrorMessage>
          )}
        </FormControl>
      )}
    />
  );
};

export default PictureField;
