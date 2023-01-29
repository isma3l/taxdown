import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react-native';
import TaxItem, { TaxItemProps } from './index';
import { WrapperNBProvider } from '@/utils';
import { SUBMISSION } from '@navigation/Routes';
import { navigate } from '@/navigation/RootNavigation';

const mockedProps: TaxItemProps = {
  id: '1',
  name: 'Tax season 2020',
  year: '2020',
};

describe('TaxItem component testing', () => {
  it('When the component is displayed with its properties name and year', () => {
    const { getByTestId } = render(
      <WrapperNBProvider>
        <TaxItem {...mockedProps} />
      </WrapperNBProvider>,
    );

    expect(getByTestId('taxItemName')).toHaveTextContent(mockedProps.name);
    expect(getByTestId('taxItemYear')).toHaveTextContent(mockedProps.year);
  });

  it('Given you have a taxId, when you press the button to add a submission, you must navigate to the submission creation screen', () => {
    const { getByTestId } = render(
      <WrapperNBProvider>
        <TaxItem {...mockedProps} />
      </WrapperNBProvider>,
    );

    const addButton = getByTestId('taxItemButtom');
    fireEvent.press(addButton);

    expect(navigate).toBeCalledWith(SUBMISSION, { taxId: mockedProps.id });
  });
});
