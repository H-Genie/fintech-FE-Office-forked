import { useMutation } from '@tanstack/react-query';
import { apiClient } from '@lib/apiClient';
import { API_ENDPOINTS } from '@constants/apiEndpoints';
import type { LoginReq, SignupReq } from '@type/auth';

export const useLogin = () => {
  return useMutation({
    mutationFn: (data: LoginReq) => apiClient.post(API_ENDPOINTS.LOGIN, data),
  });
};

export const useSignup = () => {
  return useMutation({
    mutationFn: (data: SignupReq) => apiClient.post(API_ENDPOINTS.SIGNUP, data),
  });
};
