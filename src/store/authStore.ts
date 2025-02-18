import { create } from 'zustand';
import type { AuthState } from '@type/zustand';

const getStoredAuth = () => {
  const storedAuth = sessionStorage.getItem('auth');
  return storedAuth ? JSON.parse(storedAuth) : null;
};

export const useAuthStore = create<AuthState>((set) => ({
  auth: getStoredAuth(),
  setAuth: (auth) => set({ auth }),
}));
