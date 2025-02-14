import Loader from '@components/template/Loader';
import { useTransactions } from '@hooks/useTransaction';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@components/ui/table';
import type { Transaction } from '@type/transaction';
import { transactionHeaders } from '@constants/transaction';
import { convertCurrencyFormat, convertDateFormat } from '@lib/fommater';

const TransactionsPage = () => {
  const { data, isLoading } = useTransactions();

  // TODO: 에러 났을시 처리
  if (isLoading) return <Loader />;
  else {
    return (
      <Table className='w-auto mx-auto'>
        <TableHeader>
          <TableRow>
            {transactionHeaders.map((header) => (
              <TableHead key={header} className='text-center'>
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data.transactions.map((transaction: Transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.id}</TableCell>
              <TableCell>{convertDateFormat(transaction.createdAt)}</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell className='text-right'>
                {convertCurrencyFormat(transaction.amount)}
              </TableCell>
              <TableCell>{transaction.reason}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
};

export default TransactionsPage;
