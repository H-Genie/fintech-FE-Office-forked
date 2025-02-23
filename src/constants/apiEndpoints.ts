const PROXY_URL = process.env.NODE_ENV === 'development' ? '/proxy' : '';
const BASE_URL = `${PROXY_URL}/api/backoffice/v1`;

const getPaymentsEndpoint = (paymentKey: string) =>
  `${BASE_URL}/payments/${paymentKey}`;

const getTransactionEndpoint = (paymentKey: string) =>
  `${BASE_URL}/payments/${paymentKey}/transactions`;

export const API_ENDPOINTS = {
  LOGIN: `${BASE_URL}/sign-in`,
  SIGNUP: `${BASE_URL}/sign-up`,
  PAYMENTS: {
    PAYMENTS: getPaymentsEndpoint,
    TRANSACTIONS: getTransactionEndpoint,
  },
  MANAGEMENT: {
    KEYS: `${BASE_URL}/keys`,
    ID: (id: string) => `${BASE_URL}/keys/${id}`,
  },
} as const;
