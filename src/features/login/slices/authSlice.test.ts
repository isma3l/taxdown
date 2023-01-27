import { store } from '@store';
import { signIn, restoreSession, logout } from '../slices';
import { User } from '@model';
import { Credentials } from '../types';

const credentials: Credentials = { email: 'test@gmail.com', password: 'calle falsa 666' };
const user: User = { email: 'mac@book.com' };

describe('Auth redux state tests', () => {
  it('Should initially set auth an default values', () => {
    const state = store.getState().auth;
    expect(state.email).toBe('');
    expect(state.isLoggedIn).toBe(false);
  });

  it('Given the user has credentials, when he logs in, then he is successfully logged into the app', async () => {
    const result = await store.dispatch(signIn(credentials));
    const myUser: User = <User>result.payload;

    expect(result.type).toBe('auth/signIn/fulfilled');
    expect(myUser.email).toBe(credentials.email);

    const state = store.getState().auth;
    expect(state).toEqual({ email: credentials.email, loading: false, isLoggedIn: true });
  });

  it('Given you were previously logged in, when you reopen the application, then the session data is restored to the store', () => {
    store.dispatch(restoreSession(user));

    const state = store.getState().auth;
    expect(state).toEqual({ email: user.email, loading: false, isLoggedIn: true });
  });

  it('Given you are logged in, when you log out then all data in the store will be deleted', async () => {
    store.dispatch(logout());

    const state = store.getState().auth;
    expect(state).toEqual({ email: '', loading: false, isLoggedIn: false });
  });
});
