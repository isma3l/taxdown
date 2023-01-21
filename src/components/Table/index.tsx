import React from 'react';
import { VStack } from 'native-base';
import TableHeader from '../TableHeader';
import TableRow from '../TableRow';

export type ColumnsProps<T, K extends keyof T> = {
  key: K;
  title: string;
  width: string;
};

export type TableProps<T, K extends keyof T> = {
  data: T[];
  columns: ColumnsProps<T, K>[];
};

const Table = <T extends Record<string, string | number>, K extends keyof T>({
  data,
  columns,
}: TableProps<T, K>) => {
  return (
    <VStack>
      <TableHeader columns={columns} />
      <TableRow columns={columns} data={data} />
    </VStack>
  );
};

export default Table;
