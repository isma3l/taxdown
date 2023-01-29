import React from 'react';
import { HStack, Button, Text } from 'native-base';
import { shareMessage } from '@/nativeModules';
import { logout } from '@/features/login';
import { useAppDispatch } from '@/hooks';
import { resetAndNavigate } from '@navigation/RootNavigation';
import { LOGIN } from '@navigation/Routes';

const Header = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    resetAndNavigate(LOGIN);
  };

  return (
    <HStack justifyContent="space-between" padding={2} background="white">
      <Text size="sm">Tax Down</Text>
      <HStack space={3}>
        <Button colorScheme="secondary" size="xs" onPress={() => handleLogout()}>
          Logout
        </Button>
        <Button variant="solid" size="xs" onPress={() => shareMessage('Look how cool our app is 💯.')}>
          Share
        </Button>
      </HStack>
    </HStack>
  );
};

export default Header;
