import ky from 'ky';
import { handleError } from './errorHandler';

const instance = ky.create({
  prefixUrl: '/api',
  credentials: 'include',
  hooks: {
    beforeRequest: [
      (request) => {
        request.headers.set('Content-Type', 'application/json');
      },
    ],
  },
});

export const apiClient = {
  post: <TReq = unknown, TRes = unknown>(
    endpoint: string,
    data: TReq,
  ): Promise<TRes> =>
    instance.post(endpoint, { json: data }).json<TRes>().catch(handleError),

  get: <TRes = unknown>(endpoint: string): Promise<TRes> =>
    instance.get(endpoint).json<TRes>().catch(handleError),

  put: <TReq = unknown, TRes = unknown>(
    endpoint: string,
    data: TReq,
  ): Promise<TRes> =>
    instance.put(endpoint, { json: data }).json<TRes>().catch(handleError),

  delete: <TRes = unknown>(endpoint: string): Promise<TRes> =>
    instance.delete(endpoint).json<TRes>().catch(handleError),
};
