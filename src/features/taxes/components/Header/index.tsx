import React from 'react';
import { Box, Heading, HStack, Avatar, Button } from 'native-base';

const Header = () => {
  return (
    <HStack justifyContent="space-between" padding={2} background="red.100">
      <Avatar size="sm">KM</Avatar>
    </HStack>
  );
};

export default Header;
