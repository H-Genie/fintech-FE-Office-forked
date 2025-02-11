import { http, HttpResponse } from 'msw';
import { API_ENDPOINTS } from '@constants/apiEndpoints';

export const authHandler = [
  http.post(API_ENDPOINTS.LOGIN, () => {
    return HttpResponse.json({
      ok: true,
      data: {
        id: 'user-123',
        name: 'John Doe',
        token: 'sample-token-123',
      },
    });
  }),

  http.post(API_ENDPOINTS.SIGNUP, () => {
    return HttpResponse.json({
      ok: true,
      data: {
        id: 'user-123',
      },
    });
  }),
];
