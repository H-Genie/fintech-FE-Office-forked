import { http, HttpResponse } from 'msw';
import { API_ENDPOINTS } from '@constants/apiEndpoints';

export const keyHandler = [
  http.post(API_ENDPOINTS.MANAGEMENT.KEYS, () => {
    return HttpResponse.json({
      ok: true,
      data: {
        key: 'payment-key-123',
      },
    });
  }),
];
