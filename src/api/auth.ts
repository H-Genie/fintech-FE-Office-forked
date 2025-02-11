import { api } from '@lib/apiClient';
import type { LoginReq, SignupReq } from '@type/auth';
import { API_ENDPOINTS } from '@constants/apiEndpoints';

export const authService = {
  login: (data: LoginReq) => api.post(API_ENDPOINTS.LOGIN, data),
  signup: (data: SignupReq) => api.post(API_ENDPOINTS.SIGNUP, data),
};
