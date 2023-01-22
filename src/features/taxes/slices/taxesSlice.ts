import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Tax } from '@/model';
import { fetchTaxes } from './taxesActions';
import { RootState } from '@/store';

type TaxesState = {
  loading: boolean;
  taxes: Tax[];
  error: boolean;
};

const initialState: TaxesState = {
  loading: false,
  taxes: [
    {
      id: '1',
      active: true,
      name: 'Season 2020',
      year: '2020',
    },
    {
      id: '2',
      active: true,
      name: 'Season 2022',
      year: '2022',
    },
    {
      id: '3',
      active: false,
      name: 'Season 2023',
      year: '2023',
    },
  ],
  error: false,
};

const taxesSlice = createSlice({
  name: 'taxesReducer',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTaxes.pending, state => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(fetchTaxes.fulfilled, (state, action: PayloadAction<Tax[]>) => {
      state.loading = false;
      state.error = false;
      state.taxes = action.payload;
    });
    builder.addCase(fetchTaxes.rejected, state => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const selectTaxes = (state: RootState) => state.taxesReducer.taxes;

export const selectActiveTaxes = (state: RootState) =>
  state.taxesReducer.taxes.filter(tax => tax.active === true);

export const selectInactiveTaxes = (state: RootState) =>
  state.taxesReducer.taxes.filter(tax => tax.active === false);

export const selectLoading = (state: RootState) => state.taxesReducer.loading;

export default taxesSlice.reducer;
