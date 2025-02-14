import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@components/ui/table';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@components/ui/pagination';
import type { Transaction } from '@type/transaction';
import { transactionHeaders } from '@constants/transaction';
import { convertCurrencyFormat, convertDateFormat } from '@lib/fommater';

const index = ({ data }: { data: Transaction[] }) => {
  return (
    <>
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

      <Pagination className='mt-4'>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={() => console.log('previous')} />
          </PaginationItem>

          <PaginationItem>
            <PaginationLink isActive>1</PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink onClick={() => console.log('2')}>2</PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink>3</PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>

          <PaginationItem>
            <PaginationNext />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default index;
