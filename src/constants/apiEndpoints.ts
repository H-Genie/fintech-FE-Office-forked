const BASE_URL = 'api/backoffice/v1';

const getPaymentsEndpoint = (paymentKey: string) =>
  `${BASE_URL}/payments/${paymentKey}`;

const getTransactionEndpoint = (paymentKey: string) =>
  `${BASE_URL}/payments/${paymentKey}/transactions`;

export const API_ENDPOINTS = {
  LOGIN: `${BASE_URL}/login`,
  SIGNUP: `${BASE_URL}/signup`,
  PAYMENTS: {
    PAYMENTS: getPaymentsEndpoint,
    TRANSACTIONS: getTransactionEndpoint,
  },
  KEY: `${BASE_URL}/key`,
} as const;
