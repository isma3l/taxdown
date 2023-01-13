import React from 'react';
import { Box } from 'native-base';

type TaxListProps = {
  title: string;
  active: boolean;
};

export const TaxList = ({ title, active }: TaxListProps) => {
  return <Box>{title}</Box>;
};
