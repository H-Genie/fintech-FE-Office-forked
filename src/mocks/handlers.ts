import { authHandler } from './handlers/auth';
import { transactionHandler } from './handlers/transaction';
import { keyHandler } from './handlers/key';

export const handlers = [...authHandler, ...transactionHandler, ...keyHandler];
