import { combineReducers } from '@reduxjs/toolkit';
import { AuthReducer, TaxesReducer } from '@features';

const rootReducer = combineReducers({
  auth: AuthReducer,
  taxesReducer: TaxesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
