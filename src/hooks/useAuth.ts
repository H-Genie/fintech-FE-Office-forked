import { useMutation } from '@tanstack/react-query';
import { api } from '@lib/apiClient';
import { API_ENDPOINTS } from '@constants/apiEndpoints';
import type { LoginReq, SignupReq } from '@type/auth';

export const useLogin = () => {
  return useMutation({
    mutationFn: (data: LoginReq) => api.post(API_ENDPOINTS.LOGIN, data),
  });
};

export const useSignup = () => {
  return useMutation({
    mutationFn: (data: SignupReq) => api.post(API_ENDPOINTS.SIGNUP, data),
  });
};
