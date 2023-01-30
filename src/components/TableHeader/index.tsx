import React from 'react';
import { HStack, Text } from 'native-base';
import { type ColumnsProps } from '../Table';

type TableHeaderProps<T, K extends keyof T> = {
  columns: ColumnsProps<T, K>[];
};

const TableHeader = <T, K extends keyof T>({ columns }: TableHeaderProps<T, K>) => {
  const header = columns.map(({ title, width }, index) => (
    <Text
      testID="testID-tableHeader"
      bold
      width={width}
      key={`header-${title}`}
      textAlign="center"
      borderColor="gray.300"
      borderRightWidth={index + 1 === columns.length ? 0 : 1}>
      {title}
    </Text>
  ));

  return (
    <HStack paddingX={1} background="blue.200">
      {header}
    </HStack>
  );
};

export default TableHeader;
