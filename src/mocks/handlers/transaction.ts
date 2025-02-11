import { http, HttpResponse } from 'msw';
import { API_ENDPOINTS } from '@constants/apiEndpoints';

export const transactionHandler = [
  http.get(API_ENDPOINTS.PAYMENTS.PAYMENTS('payment-key'), () => {
    return HttpResponse.json({
      ok: true,
      data: {
        id: 9007199254740991,
        paymentKey: 'string',
        cardNumber: 'string',
        currency: 'KRW',
        accountId: 9007199254740991,
        merchantId: 'string',
        paymentType: 'CARD',
        orderId: 'string',
        orderName: 'string',
        createdAt: '2025-02-11T11:08:34.894Z',
        updatedAt: '2025-02-11T11:08:34.894Z',
      },
    });
  }),

  http.get(API_ENDPOINTS.PAYMENTS.TRANSACTIONS('payment-key'), () => {
    return HttpResponse.json({
      ok: true,
      data: {
        transactions: [
          {
            id: 9007199254740991,
            paymentKey: 'payment_key_1',
            amount: 35000,
            status: 'APPROVED',
            reason: '정상 승인',
            createdAt: '2025-02-11T11:07:49.412Z',
            updatedAt: '2025-02-11T11:07:49.413Z',
          },
          {
            id: 9007199254740990,
            paymentKey: 'payment_key_2',
            amount: 67800,
            status: 'APPROVED',
            reason: '정상 승인',
            createdAt: '2025-02-11T10:15:22.894Z',
            updatedAt: '2025-02-11T10:15:22.894Z',
          },
          {
            id: 9007199254740989,
            paymentKey: 'payment_key_3',
            amount: 299,
            status: 'FAILED',
            reason: '한도 초과',
            createdAt: '2025-02-11T09:30:11.894Z',
            updatedAt: '2025-02-11T09:30:11.894Z',
          },
        ],
      },
    });
  }),
];
