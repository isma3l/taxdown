export type UserCredentials = {
  email: string;
  password: string;
};

export type User = {
  email: string;
};

export type AuthState = {
  user: User;
  loading: boolean;
  isLoggedIn: boolean;
};

export type AuthRequest = UserCredentials;

export type AuthResponse = UserCredentials;
