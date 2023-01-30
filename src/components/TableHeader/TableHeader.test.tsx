import { WrapperNBProvider } from '@/utils';
import { render } from '@testing-library/react-native';
import React from 'react';
import { ColumnsProps } from '../Table';
import TableHeader from './index';

type TestUser = {
  name: string;
  age: number;
};

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
  testId: 'testID-tableHeader',
};

describe('TableHeader component testing', () => {
  it('Should show 2 columns with the properties set', () => {
    const { getAllByTestId } = render(
      <WrapperNBProvider>
        <TableHeader columns={col} />
      </WrapperNBProvider>,
    );

    const headers = getAllByTestId(mockProps.testId);
    expect(headers.length).toBe(2);

    expect(headers[0]).toHaveTextContent('age');
    expect(headers[0]).toHaveStyle({ width: '40%' });

    expect(headers[1]).toHaveTextContent('name');
    expect(headers[1]).toHaveStyle({ width: '50%' });
  });
});
