import { WrapperNBProvider } from '@/utils';
import { render } from '@testing-library/react-native';
import React from 'react';
import { ColumnsProps } from '../Table';
import TableRow from './index';

type TestUser = {
  name: string;
  age: number;
};

const testRows: TestUser[] = [
  { name: 'Lorena', age: 12 },
  { name: 'Cecilia', age: 32 },
  { name: 'Pedro', age: 31 },
];

const col: ColumnsProps<TestUser, keyof TestUser>[] = [
  {
    key: 'age',
    title: 'age',
    width: '40%',
  },
  {
    key: 'name',
    title: 'name',
    width: '50%',
  },
];

const mockProps = {
  testId: 'testID-row',
};

describe('TableRow component testing', () => {
  it('Should show 3 rows with the values set', () => {
    const { getAllByTestId, getByText } = render(
      <WrapperNBProvider>
        <TableRow columns={col} data={testRows} />
      </WrapperNBProvider>,
    );

    const rows = getAllByTestId(mockProps.testId);
    expect(rows.length).toBe(3);

    expect(rows[0]).toHaveTextContent('Lorena');
    expect(getByText('Lorena')).toHaveStyle({ width: '50%' });
    expect(rows[0]).toHaveTextContent('12');
    expect(getByText('12')).toHaveStyle({ width: '40%' });

    expect(rows[1]).toHaveTextContent('Cecilia');
    expect(getByText('Cecilia')).toHaveStyle({ width: '50%' });
    expect(rows[1]).toHaveTextContent('32');
    expect(getByText('32')).toHaveStyle({ width: '40%' });

    expect(rows[2]).toHaveTextContent('Pedro');
    expect(getByText('Pedro')).toHaveStyle({ width: '50%' });
    expect(rows[2]).toHaveTextContent('31');
    expect(getByText('31')).toHaveStyle({ width: '40%' });
  });
});
