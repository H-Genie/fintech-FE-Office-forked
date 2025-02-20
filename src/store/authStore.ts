import { create } from 'zustand';
import type { AuthState } from '@type/zustand';

const getStoredAuth = () => {
  const storedAuth = sessionStorage.getItem('auth');
  return storedAuth ? JSON.parse(storedAuth) : null;
};

export const useAuthStore = create<AuthState>((set) => ({
  auth: null,
  setAuth: (auth) => set({ auth }),
  logout: () => {
    sessionStorage.removeItem('auth');
    set({ auth: null });
    window.location.href = '/login';
  },
}));

const initializeAuth = () => {
  const auth = getStoredAuth();
  if (auth) {
    useAuthStore.getState().setAuth(auth);
  }
};

initializeAuth();
