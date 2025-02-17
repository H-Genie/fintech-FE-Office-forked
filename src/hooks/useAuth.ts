import { useMutation } from '@tanstack/react-query';
import { apiClient } from '@lib/api/apiClient';
import { API_ENDPOINTS } from '@constants/apiEndpoints';
import type { LoginReq, SignupReq } from '@type/auth';
import { useToast } from '@hooks/useToast';
import { ApiError } from '@lib/api/errorHandler';

export const useLogin = () => {
  const { toast } = useToast();

  return useMutation({
    mutationFn: (data: LoginReq) => apiClient.post(API_ENDPOINTS.LOGIN, data),
    onError: (error) => {
      toast({
        title: '로그인 실패',
        description:
          error instanceof ApiError
            ? error.message
            : '로그인 중 오류가 발생했습니다. 다시 시도해주세요.',
        variant: 'destructive',
      });
    },
  });
};

export const useSignup = () => {
  const { toast } = useToast();

  return useMutation({
    mutationFn: (data: SignupReq) => apiClient.post(API_ENDPOINTS.SIGNUP, data),
    onError: (error) => {
      toast({
        title: '회원가입 실패',
        description:
          error instanceof ApiError
            ? error.message
            : '회원가입 중 오류가 발생했습니다. 다시 시도해주세요.',
        variant: 'destructive',
      });
    },
  });
};
