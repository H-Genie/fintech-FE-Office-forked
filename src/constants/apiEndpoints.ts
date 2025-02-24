export const API_URL = 'https://backoffice.pay-200.com';

const PROXY_URL = process.env.NODE_ENV === 'development' ? '/proxy' : API_URL;
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
    ID: `${BASE_URL}/my-key`,
  },
} as const;
