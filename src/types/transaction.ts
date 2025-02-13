export type Transaction = {
  id: number;
  paymentKey: string;
  amount: number;
  status: string;
  reason: string;
  createdAt: string;
  updatedAt: string;
};

export interface TransactionResponse {
  data: {
    transactions: Transaction[];
  };
}
