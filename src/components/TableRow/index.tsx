import React from 'react';
import { HStack, Text } from 'native-base';

import { type ColumnsProps } from '../Table';

type TableRowProps<T, K extends keyof T> = {
  data: T[];
  columns: ColumnsProps<T, K>[];
};

const TableRow = <T extends Record<string, string | number>, K extends keyof T>({
  data,
  columns,
}: TableRowProps<T, K>) => {
  const getRow = (item: T) => {
    return columns.map((column, idx) => {
      return (
        <Text
          width={column.width}
          textAlign="center"
          key={`${idx}`}
          borderColor="gray.300"
          borderRightWidth={idx + 1 === columns.length ? 0 : 1}>
          {item[column.key]}
        </Text>
      );
    });
  };

  return (
    <>
      {data.map((item, index) => {
        return (
          <HStack testID="testID-row" key={`row-${index}`} paddingX={1}>
            {getRow(item)}
          </HStack>
        );
      })}
    </>
  );
};

export default TableRow;
