import type { Auth } from '@type/auth';

export type AuthState = {
  auth: Auth | null;
  setAuth: (auth: Auth) => void;
};
