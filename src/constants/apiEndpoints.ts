const BASE_URL = 'api/backoffice/v1';

const getTransactionEndpoint = (paymentKey: string) =>
  `${BASE_URL}/payments/${paymentKey}/transactions`;

export const API_ENDPOINTS = {
  LOGIN: `${BASE_URL}/login`,
  SIGNUP: `${BASE_URL}/signup`,
  PAYMENT: {
    TRANSACTIONS: getTransactionEndpoint,
  },
  KEY: {
    API_KEYS: `${BASE_URL}/key`,
  },
} as const;
