import { combineReducers } from '@reduxjs/toolkit';
import { AuthReducer, taxesReducer, submissionsReducer, FilterReducer } from '@features';

const rootReducer = combineReducers({
  auth: AuthReducer,
  taxesReducer: taxesReducer,
  submissionReducer: submissionsReducer,
  filterReducer: FilterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
