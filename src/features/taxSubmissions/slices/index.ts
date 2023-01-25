import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@store';
import { createSelector } from 'reselect';
import { type FilterValues } from '../components';
import { type ITaxSubmission } from '../types';
import { Submission } from '@model';
import { selectTaxes } from '@/features/taxes';
import { selectSubmissions } from '@/features/submission';

type FilterState = {
  values: FilterValues;
};

const initialState: FilterState = {
  values: {
    year: '',
    name: '',
    surname: '',
    age: '',
  },
};

const FilterSlice = createSlice({
  name: 'FilterReducer',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<FilterValues>) => {
      const { year, name, surname, age } = action.payload;
      state.values.year = year;
      state.values.name = name;
      state.values.surname = surname;
      state.values.age = age;
    },
    resetFilters: state => {
      state.values = { ...initialState.values };
    },
  },
});

export const { setFilter, resetFilters } = FilterSlice.actions;

const selectFilterValues = (state: RootState) => state.filterReducer;

export const selectFilteredTaxSubmissions = createSelector(
  selectTaxes,
  selectSubmissions,
  selectFilterValues,
  (taxes, submissions, filterValues) => {
    const hasNotFilterByYear = filterValues.values.year === '';
    const taxesFilteredByYear = hasNotFilterByYear ? taxes : taxes.filter(tax => tax.year === filterValues.values.year);

    const filterKeys = Object.keys(filterValues.values) as (keyof FilterValues)[];
    const completeFiltersWithoutYear = filterKeys.filter(key => filterValues.values[key] !== '' && key !== 'year');

    const filteredTaxSubmissions = taxesFilteredByYear.map(tax => {
      const submissionsOfTax = tax.id in submissions ? submissions[tax.id] : [];

      const filteredSubmissions = submissionsOfTax.filter(submission => {
        let submissionIncluded = true;

        completeFiltersWithoutYear.forEach(key => {
          const value = submission[key as keyof Submission];
          if (value === undefined || !String(value).toLowerCase().includes(filterValues.values[key].toLowerCase())) {
            submissionIncluded = false;
            return;
          }
        });
        return submissionIncluded;
      });

      const filteredTaxSubmission: ITaxSubmission = {
        ...tax,
        submissions: filteredSubmissions,
      };

      return filteredTaxSubmission;
    });

    return filteredTaxSubmissions;
  },
);

export default FilterSlice.reducer;
