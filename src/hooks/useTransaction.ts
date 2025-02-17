import { useQuery } from '@tanstack/react-query';
import { api } from '@lib/apiClient';
import { API_ENDPOINTS } from '@constants/apiEndpoints';
import type { TransactionResponse } from '@type/transaction';

export const usePayments = () => {
  return useQuery({
    queryKey: ['get-payments'],
    queryFn: () => api.get(API_ENDPOINTS.PAYMENTS.PAYMENTS('payment-key')),
  });
};

export const useTransactions = () => {
  return useQuery<TransactionResponse>({
    queryKey: ['get-transactions'],
    queryFn: () => api.get(API_ENDPOINTS.PAYMENTS.TRANSACTIONS('payment-key')),
  });
};
