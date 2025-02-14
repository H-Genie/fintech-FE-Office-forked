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

const index = ({ data }: { data: Transaction[] }) => {
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
        {data.map((transaction: Transaction) => (
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
};

export default index;
