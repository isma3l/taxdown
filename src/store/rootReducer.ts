import { AnyAction, combineReducers, Reducer } from '@reduxjs/toolkit';
import { AuthReducer, taxesReducer, submissionsReducer, FilterReducer } from '@features';
import { clearAllData } from '@/lib';

export const LOGOUT_ACTION = 'auth/logout';

const combinedReducer = combineReducers({
  auth: AuthReducer,
  taxesReducer: taxesReducer,
  submissionReducer: submissionsReducer,
  filterReducer: FilterReducer,
});

export type RootState = ReturnType<typeof combinedReducer>;

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === LOGOUT_ACTION) {
    state = {} as RootState;
    clearAllData();
  }
  return combinedReducer(state, action);
};

export default rootReducer;
