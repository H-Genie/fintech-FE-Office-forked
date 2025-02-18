import { useMutation } from '@tanstack/react-query';
import { apiClient } from '@lib/api/apiClient';
import { API_ENDPOINTS } from '@constants/apiEndpoints';
import type { KeyReq } from '@type/key';

export const useKey = () => {
  return useMutation({
    mutationFn: (data: KeyReq) => apiClient.post(API_ENDPOINTS.KEY, data),
  });
};
