import { store } from '@store';
import { getTaxes } from '../services';
import { fetchTaxes } from './taxesActions';
import { Tax } from '@model';
import { logout } from '../../login';

jest.mock('../services');

afterEach(() => {
  store.dispatch(logout());
});

describe('Tests of the state of the taxes', () => {
  const mockedGetTaxes = getTaxes as jest.Mock<Promise<Tax[]>>;

  const taxesResponse: Tax[] = [
    {
      id: '1',
      active: true,
      name: 'Season 2020',
      year: '2020',
    },
  ];

  it('Initially the taxes status must have default', () => {
    const state = store.getState().taxesReducer;

    expect(state).toEqual({
      loading: false,
      taxes: [],
      error: false,
    });
  });

  it('A tax list should be returned when the user requests it', async () => {
    mockedGetTaxes.mockResolvedValue(taxesResponse);

    const result = await store.dispatch(fetchTaxes());
    const taxes = result.payload;

    expect(result.type).toBe('taxes/fetch/fulfilled');
    expect(taxes).toEqual(taxesResponse);

    const state = store.getState().taxesReducer;
    expect(state.taxes).toEqual(taxes);
  });

  it('Given there is a network error, when requesting a tax list receive an error', async () => {
    mockedGetTaxes.mockImplementation(() => {
      throw new Error('Error: An error has occurred with the services');
    });

    const result = await store.dispatch(fetchTaxes());

    expect(result.type).toBe('taxes/fetch/rejected');
    expect(result.payload).toBe('Error: An error has occurred with the services');

    const state = store.getState().taxesReducer;
    expect(state.error).toBe(true);
  });
});
