import { useMutation } from '@tanstack/react-query';
import { api } from '@lib/apiClient';
import { API_ENDPOINTS } from '@constants/apiEndpoints';
import type { KeyReq } from '@type/key';

export const useKey = () => {
  return useMutation({
    mutationFn: (data: KeyReq) => api.post(API_ENDPOINTS.KEY, data),
  });
};
