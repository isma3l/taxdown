import React from 'react';
import { Image } from 'react-native';
import { Box, VStack, Button, HStack, Text, IconButton, Icon } from 'native-base';
import images from '@images';
//import { AntDesign } from '@expo/vector-icons';
//import styles from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const NewSubmission = () => {
  return (
    <Box safeArea flex="1" alignItems="center">
      <HStack justifyContent="space-between" w="100%">
        <HStack>
          <Text color={'coolGray.600'}>Nuevo</Text>
          {/* <FontAwesome5 name="comments" size={20} color="#900" /> */}
          <Icon name="eye" />
          {/*        <IconButton
            colorScheme="indigo"
            key={'solid'}
            variant={'solid'}
            _icon={{
              as: AntDesign,
              name: 'search1',
            }}
          /> */}
        </HStack>
      </HStack>
      <VStack space={4} width="80%" marginTop={20}>
        <Button mt="2" colorScheme="indigo" marginTop={8}>
          Creaacion de impuestos
        </Button>
      </VStack>
    </Box>
  );
};

export default NewSubmission;
