import React from 'react';
import { Box, Spinner } from 'native-base';

const Loading = () => {
  return (
    <Box justifyContent="center" alignItems="center" flex="1">
      <Spinner size="lg" />
    </Box>
  );
};

export default Loading;
