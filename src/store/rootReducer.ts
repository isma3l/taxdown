import { combineReducers } from '@reduxjs/toolkit';
import { AuthReducer } from '@features';

const rootReducer = combineReducers({
  auth: AuthReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
