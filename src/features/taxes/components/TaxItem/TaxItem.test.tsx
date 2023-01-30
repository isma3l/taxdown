import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TaxItem from './index';
import { WrapperNBProvider } from '@/utils';
import { SUBMISSION } from '@navigation/Routes';
import { navigate } from '@/navigation/RootNavigation';

const mockedProps = {
  id: '1',
  name: 'Tax season 2020',
  year: '2020',
  testIds: {
    name: 'taxItemName',
    year: 'taxItemYear',
    button: 'taxItemButtom',
  },
};

describe('TaxItem component testing', () => {
  const renderTaxItem = () => {
    const { getByTestId } = render(
      <WrapperNBProvider>
        <TaxItem {...mockedProps} />
      </WrapperNBProvider>,
    );
    return getByTestId;
  };

  it('When the component is displayed with its properties name and year', () => {
    const { name, year, testIds } = mockedProps;
    const getByTestId = renderTaxItem();

    expect(getByTestId(testIds.name)).toHaveTextContent(name);
    expect(getByTestId(testIds.year)).toHaveTextContent(year);
  });

  it('Given you have a taxId, when you press the button to add a submission, you must navigate to the submission creation screen', () => {
    const { id, testIds } = mockedProps;
    const getByTestId = renderTaxItem();

    const addButton = getByTestId(testIds.button);
    fireEvent.press(addButton);

    expect(navigate).toBeCalledWith(SUBMISSION, { taxId: id });
  });
});
