import React from 'react';
import { Box } from 'native-base';
import { useForm } from 'react-hook-form';
import { Table } from '@components';
import { Filters } from './components';
import { type TaxSubmission } from './types';
import { ColumnsProps } from '@/components/Table';
import type { FilterData } from './components';

const TaxSubmissions = () => {
  const data: TaxSubmission[] = [
    {
      taxId: 't1',
      taxYear: '2022',
      submissionId: 's1',
      name: 'Pedro',
      surname: 'Vasquez',
      age: 23,
    },
    {
      taxId: 't2',
      taxYear: '2023',
      submissionId: 's2',
      name: 'Maria',
      surname: 'Rosales',
      age: 99,
    },
    {
      taxId: 't3',
      taxYear: '2024',
      submissionId: 's3',
      name: 'Jose',
      surname: 'Salas pelisa salvaje ',
      age: 76,
    },
    {
      taxId: 't4',
      taxYear: '2025',
      submissionId: 's4',
      name: 'Jose Luisa Perles',
      surname: 'Benjamin button',
      age: 35,
    },
    {
      taxId: 't4',
      taxYear: '2026',
      submissionId: 's4',
      name: 'Liz elizabeth',
      surname: 'Corrales del Porton',
      age: 76,
    },
    {
      taxId: 't2',
      taxYear: '2023',
      submissionId: 's2',
      name: 'Maria',
      surname: 'Rosales',
      age: 99,
    },
    {
      taxId: 't3',
      taxYear: '2024',
      submissionId: 's3',
      name: 'Jose',
      surname: 'Salas pelisa salvaje ',
      age: 76,
    },
    {
      taxId: 't4',
      taxYear: '2025',
      submissionId: 's4',
      name: 'Jose Luisa Perles',
      surname: 'Benjamin button',
      age: 35,
    },
    {
      taxId: 't4',
      taxYear: '2026',
      submissionId: 's4',
      name: 'Liz elizabeth',
      surname: 'Corrales del Porton',
      age: 76,
    },
    {
      taxId: 't2',
      taxYear: '2023',
      submissionId: 's2',
      name: 'Maria',
      surname: 'Rosales',
      age: 99,
    },
    {
      taxId: 't3',
      taxYear: '2024',
      submissionId: 's3',
      name: 'Jose',
      surname: 'Salas pelisa salvaje ',
      age: 76,
    },
    {
      taxId: 't4',
      taxYear: '2025',
      submissionId: 's4',
      name: 'Jose Luisa Perles',
      surname: 'Benjamin button',
      age: 35,
    },
    {
      taxId: 't4',
      taxYear: '2026',
      submissionId: 's4',
      name: 'Liz elizabeth',
      surname: 'Corrales del Porton',
      age: 76,
    },
    {
      taxId: 't2',
      taxYear: '2023',
      submissionId: 's2',
      name: 'Maria',
      surname: 'Rosales',
      age: 99,
    },
    {
      taxId: 't3',
      taxYear: '2024',
      submissionId: 's3',
      name: 'Jose',
      surname: 'Salas pelisa salvaje ',
      age: 76,
    },
    {
      taxId: 't4',
      taxYear: '2025',
      submissionId: 's4',
      name: 'Jose Luisa Perles',
      surname: 'Benjamin button',
      age: 35,
    },
    {
      taxId: 't4',
      taxYear: '2026',
      submissionId: 's4',
      name: 'Liz elizabeth',
      surname: 'Corrales del Porton',
      age: 76,
    },
    {
      taxId: 't2',
      taxYear: '2023',
      submissionId: 's2',
      name: 'Maria',
      surname: 'Rosales',
      age: 99,
    },
    {
      taxId: 't3',
      taxYear: '2024',
      submissionId: 's3',
      name: 'Jose',
      surname: 'Salas pelisa salvaje ',
      age: 76,
    },
    {
      taxId: 't4',
      taxYear: '2025',
      submissionId: 's4',
      name: 'Jose Luisa Perles',
      surname: 'Benjamin button 3ero',
      age: 35,
    },
    {
      taxId: 't4',
      taxYear: '2026',
      submissionId: 's4',
      name: 'Liz elizabeth',
      surname: 'Corrales del Porton',
      age: 120,
    },
  ];

  const columns: ColumnsProps<TaxSubmission, keyof TaxSubmission>[] = [
    {
      key: 'taxYear',
      title: 'Año',
      width: '15%',
    },
    {
      key: 'name',
      title: 'Name',
      width: '35%',
    },
    {
      key: 'surname',
      title: 'Apellido',
      width: '35%',
    },
    {
      key: 'age',
      title: 'Edad',
      width: '15%',
    },
  ];

  const { control, formState } = useForm();

  //const updateList = () => {};
  console.log(formState);

  const filters = [
    {
      id: 'year',
      label: 'Year',
      width: '60%',
    },
    {
      id: 'name',
      label: 'Name',
      width: '60%',
    },
    {
      id: 'surname',
      label: 'Surname',
      width: '60%',
    },
    {
      id: 'age',
      label: 'Age',
      width: '60%',
    },
  ];

  return (
    <Box safeArea alignItems="center" flex="1" paddingX={4} paddingTop="4">
      <Filters data={filters} control={control} />
      <Box flex="1" width="100%" margin={4} paddingBottom={4} background="white">
        <Table data={data} columns={columns} />
      </Box>
    </Box>
  );
};

export default TaxSubmissions;
