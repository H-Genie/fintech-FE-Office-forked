import { useMutation } from '@tanstack/react-query';
import { apiClient } from '@lib/api/apiClient';
import { API_ENDPOINTS } from '@constants/apiEndpoints';
import type { LoginReq, SignupReq } from '@type/auth';
import { toast } from '@hooks/useToast';
import { ApiError } from '@lib/api/errorHandler';

const createToastErrorHandler =
  (action: '로그인' | '회원가입') => (error: unknown) => {
    toast({
      title: `${action} 실패`,
      description:
        error instanceof ApiError
          ? error.message
          : `${action} 중 오류가 발생했습니다. 다시 시도해주세요.`,
      variant: 'destructive',
    });
  };

export const useLogin = () => {
  return useMutation({
    mutationFn: (data: LoginReq) => apiClient.post(API_ENDPOINTS.LOGIN, data),
    onError: createToastErrorHandler('로그인'),
  });
};

export const useSignup = () => {
  return useMutation({
    mutationFn: (data: SignupReq) => apiClient.post(API_ENDPOINTS.SIGNUP, data),
    onError: createToastErrorHandler('회원가입'),
  });
};
