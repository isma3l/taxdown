import { combineReducers } from '@reduxjs/toolkit';
import { AuthReducer, taxesReducer, submissionsReducer } from '@features';

const rootReducer = combineReducers({
  auth: AuthReducer,
  taxesReducer: taxesReducer,
  submissionReducer: submissionsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
