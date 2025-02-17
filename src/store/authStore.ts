import { create } from 'zustand';
import type { Auth } from '@type/auth'; // 필요한 타입 import

interface AuthState {
  auth: Auth | null;
  setAuth: (auth: Auth) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  auth: null,
  setAuth: (auth) => set({ auth }),
}));
