import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@lib/api/apiClient';
import { API_ENDPOINTS } from '@constants/apiEndpoints';
import type { TransactionResponse } from '@type/transaction';

export const usePayments = () => {
  return useQuery({
    queryKey: ['get-payments'],
    queryFn: () =>
      apiClient.get(API_ENDPOINTS.PAYMENTS.PAYMENTS('payment-key')),
  });
};

export const useTransactions = () => {
  return useQuery<TransactionResponse>({
    queryKey: ['get-transactions'],
    queryFn: () =>
      apiClient.get(API_ENDPOINTS.PAYMENTS.TRANSACTIONS('payment-key')),
  });
};
