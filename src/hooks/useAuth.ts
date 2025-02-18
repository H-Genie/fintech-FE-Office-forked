import { useMutation } from '@tanstack/react-query';
import { apiClient } from '@lib/api/apiClient';
import { API_ENDPOINTS } from '@constants/apiEndpoints';
import type { LoginReq, LoginRes, SignupReq } from '@type/auth';
import { createToastSuccess, createToastError } from '@lib/toast';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@store/authStore';

export const useLogin = () => {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: (data: LoginReq) =>
      apiClient.post<LoginReq, LoginRes>(API_ENDPOINTS.LOGIN, data),
    onSuccess: (response: LoginRes) => {
      setAuth(response.data);
      createToastSuccess('로그인 성공', '메인 페이지로 이동합니다');
      navigate('/');
    },
    onError: createToastError('로그인 실패'),
  });
};

export const useSignup = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: SignupReq) => apiClient.post(API_ENDPOINTS.SIGNUP, data),
    onSuccess: () => {
      createToastSuccess('회원가입 성공', '로그인 페이지로 이동합니다');
      navigate('/login');
    },
    onError: createToastError('회원가입 실패'),
  });
};
