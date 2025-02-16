import ky from 'ky';
import { handleError } from './errorHandler';

const instance = ky.create({
  prefixUrl: '/api',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
    'Custom-Header': 'value',
  },
  hooks: {
    beforeRequest: [
      (request) => {
        request.headers.set('Dynamic-Header', 'dynamic-value');
      },
    ],
  },
});

// apiClient.post('/endpoint', data, {'Authorization': 'Bearer token'});
// apiClient.get('/endpoint', {'Authorization': 'Bearer token'});
// apiClient.put('/endpoint', data, {'Authorization': 'Bearer token'});
// apiClient.delete('/endpoint', {'Authorization': 'Bearer token'});
export const apiClient = {
  post: <TReq = unknown, TRes = unknown>(
    endpoint: string,
    data: TReq,
    headers?: Record<string, string>,
  ): Promise<TRes> =>
    instance
      .post(endpoint, {
        json: data,
        headers,
      })
      .json<TRes>()
      .catch(handleError),

  get: <TRes = unknown>(
    endpoint: string,
    headers?: Record<string, string>,
  ): Promise<TRes> =>
    instance.get(endpoint, { headers }).json<TRes>().catch(handleError),

  put: <TReq = unknown, TRes = unknown>(
    endpoint: string,
    data: TReq,
    headers?: Record<string, string>,
  ): Promise<TRes> =>
    instance
      .put(endpoint, {
        json: data,
        headers,
      })
      .json<TRes>()
      .catch(handleError),

  delete: <TRes = unknown>(
    endpoint: string,
    headers?: Record<string, string>,
  ): Promise<TRes> =>
    instance.delete(endpoint, { headers }).json<TRes>().catch(handleError),
};
