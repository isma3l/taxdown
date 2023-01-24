import React from 'react';
import { HStack, Avatar, Button } from 'native-base';
import { shareMessage } from '@/nativeModules';

const Header = () => {
  return (
    <HStack justifyContent="space-between" padding={2} background="white">
      <Avatar size="sm">KM</Avatar>
      <Button size="xs" onPress={() => shareMessage('Look how cool our app is 💯.')}>
        Share
      </Button>
    </HStack>
  );
};

export default Header;
