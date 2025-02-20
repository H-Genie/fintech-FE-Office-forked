import { useMutation, useQuery } from '@tanstack/react-query';
import { apiClient } from '@lib/api/apiClient';
import { API_ENDPOINTS } from '@constants/apiEndpoints';
import type { KeyReq, KeyRes } from '@type/key';

export const useKeys = () => {
  return useMutation({
    mutationFn: (data: KeyReq) =>
      apiClient.post<KeyReq, KeyRes>(API_ENDPOINTS.MANAGEMENT.KEYS, data),
  });
};

export const useKeysId = (id: string) => {
  return useQuery({
    queryKey: ['get-key'],
    queryFn: () => apiClient.get<KeyRes>(API_ENDPOINTS.MANAGEMENT.ID(id)),
  });
};
