import { useMutation } from '@tanstack/react-query';
import { apiClient } from '@lib/api/apiClient';
import { API_ENDPOINTS } from '@constants/apiEndpoints';
import type { LoginReq, LoginRes, SignupReq } from '@type/auth';
import { toast } from '@hooks/useToast';
import { ApiError } from '@lib/api/errorHandler';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@store/authStore';

const createToastSuccessHandler = (title: string, description: string) => {
  return toast({
    title,
    description,
  });
};

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
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: (data: LoginReq) =>
      apiClient.post<LoginReq, LoginRes>(API_ENDPOINTS.LOGIN, data),
    onSuccess: (response: LoginRes) => {
      setAuth(response.data);
      createToastSuccessHandler('로그인 성공', '메인 페이지로 이동합니다');
      navigate('/');
    },
    onError: createToastErrorHandler('로그인'),
  });
};

export const useSignup = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: SignupReq) => apiClient.post(API_ENDPOINTS.SIGNUP, data),
    onSuccess: () => {
      createToastSuccessHandler('회원가입 성공', '로그인 페이지로 이동합니다');
      navigate('/login');
    },
    onError: createToastErrorHandler('회원가입'),
  });
};
