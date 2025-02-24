const BASE_URL = '/proxy/api/backoffice/v1';

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
