import { create } from 'zustand';
import type { AuthState } from '@type/zustand';

export const useAuthStore = create<AuthState>((set) => ({
  auth: null,
  setAuth: (auth) => set({ auth }),
}));
