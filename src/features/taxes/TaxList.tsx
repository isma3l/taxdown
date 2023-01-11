import React from 'react';
import { Image } from 'react-native';
import { Box, VStack, Button } from 'native-base';
import images from '@images';

//import styles from './styles';

const TaxListScreen = () => {
  return (
    <Box safeArea alignItems="center">
      <VStack space={4} width="80%" marginTop="20">
        <Image source={images.logo} />
        <Button mt="2" colorScheme="indigo" marginTop={8}>
          Lista de impuestos
        </Button>
      </VStack>
    </Box>
  );
};

export default TaxListScreen;
