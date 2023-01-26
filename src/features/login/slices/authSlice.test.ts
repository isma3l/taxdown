import { store } from '@store';

describe('Auth redux state tests', () => {
  it('Should initially set auth an default values', () => {
    const state = store.getState().auth;
    expect(state.email).toBe('');
    expect(state.isLoggedIn).toBe(false);
  });
});
