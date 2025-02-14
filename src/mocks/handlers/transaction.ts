import { http, HttpResponse } from 'msw';
import { API_ENDPOINTS } from '@constants/apiEndpoints';
import { MOCK_PAYMENT, MOCK_TRANSACTIONS } from '../data/transactions';

export const transactionHandler = [
  http.get(API_ENDPOINTS.PAYMENTS.PAYMENTS('payment-key'), () => {
    return HttpResponse.json({
      ok: true,
      data: MOCK_PAYMENT,
    });
  }),

  http.get(API_ENDPOINTS.PAYMENTS.TRANSACTIONS('payment-key'), () => {
    return HttpResponse.json({
      ok: true,
      data: {
        transactions: MOCK_TRANSACTIONS,
      },
    });
  }),
];
