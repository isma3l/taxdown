import React from 'react';
import * as reactRedux from 'react-redux';
import { render } from '@testing-library/react-native';
import { WrapperNBProvider } from '@/utils';
import { Tax } from '@model';
import TaxList from './index';

jest.mock('react-redux', () => {
  return {
    useSelector: jest.fn(),
  };
});

const mockedProps = {
  taxes: [
    {
      id: '1',
      name: 'Tax season 2020',
      year: '2020',
      active: true,
    },
    {
      id: '',
      name: 'Tax season 2021',
      year: '2021',
      active: false,
    },
  ],
  testIds: {
    spinner: 'testID-spinner',
    list: 'testID-taxes',
    emptyList: 'testID-emptyList',
    error: 'testID-error',
    item: 'testID-taxItem',
  },
};

describe('TaxList component testing', () => {
  const renderTaxList = (taxes: Tax[]) => {
    const { queryByTestId, getAllByTestId } = render(
      <WrapperNBProvider>
        <TaxList taxes={taxes} />
      </WrapperNBProvider>,
    );

    return { queryByTestId, getAllByTestId };
  };

  const useSelectorMock = reactRedux.useSelector as jest.Mock;
  const { testIds } = mockedProps;

  it('Given a tax list is available, while requesting the spinner is displayed', () => {
    useSelectorMock.mockImplementation(selector =>
      selector({
        taxesReducer: {
          loading: true,
          error: false,
        },
      }),
    );

    const { queryByTestId } = renderTaxList([]);

    expect(queryByTestId(testIds.spinner)).toBeTruthy();
    expect(queryByTestId(testIds.list)).toBeNull();
  });

  it('Given there is no tax list, no taxes are shown after the request', () => {
    useSelectorMock.mockImplementation(selector =>
      selector({
        taxesReducer: {
          loading: false,
          error: false,
        },
      }),
    );

    const { queryByTestId } = renderTaxList([]);

    expect(queryByTestId(testIds.spinner)).toBeNull();
    expect(queryByTestId(testIds.error)).toBeNull();
    expect(queryByTestId(testIds.emptyList)).toBeTruthy();
  });

  it('Given there is a list of taxes, taxes will be shown after the request', () => {
    useSelectorMock.mockImplementation(selector =>
      selector({
        taxesReducer: {
          loading: false,
          error: false,
        },
      }),
    );

    const { queryByTestId, getAllByTestId } = renderTaxList(mockedProps.taxes);

    expect(queryByTestId(testIds.spinner)).toBeNull();
    expect(queryByTestId(testIds.emptyList)).toBeNull();
    expect(queryByTestId(testIds.list)).toBeTruthy();
    expect(getAllByTestId(testIds.item).length).toBe(2);
  });
});
