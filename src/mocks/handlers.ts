import { authHandler } from './handlers/auth';
import { transactionHandler } from './handlers/transaction';

export const handlers = [...authHandler, ...transactionHandler];
