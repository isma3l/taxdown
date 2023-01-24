import React from 'react';
import { HStack, Text, VStack } from 'native-base';
import { Table } from '@components';
import { type ITaxSubmission } from '../../types';
import { ColumnsProps } from '@/components/Table';
import { Submission } from '@model';

const columns: ColumnsProps<Submission, keyof Submission>[] = [
  {
    key: 'name',
    title: 'Name',
    width: '40%',
  },
  {
    key: 'surname',
    title: 'Apellido',
    width: '40%',
  },
  {
    key: 'age',
    title: 'Edad',
    width: '20%',
  },
];

type TaxTableProps = {
  taxSubmission: ITaxSubmission;
};

const TaxTable = ({ taxSubmission }: TaxTableProps) => {
  const { name, year, active, submissions } = taxSubmission;

  return (
    <VStack>
      <HStack justifyContent="space-around" background="yellow.100" borderBottomWidth="0.5" borderColor="gray.400">
        <VStack padding={1}>
          <Text>{name}</Text>
          <Text>{year}</Text>
        </VStack>
        {
          <Text fontSize="xs" textAlign="center" color={`${active ? 'green.800' : 'red.800'}`} bold alignSelf="center">
            {active ? 'Active' : 'Inactive'}
          </Text>
        }
      </HStack>
      {submissions.length > 0 && <Table data={submissions} columns={columns} />}
    </VStack>
  );
};

export default TaxTable;
