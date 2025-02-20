import Loader from '@components/template/Loader';
import { useTransactions } from '@hooks/useTransaction';
import Transactions from '@components/template/Transactions';
import Error from '@components/template/Error';
import { useAuthStore } from '@store/authStore';
const TransactionsPage = () => {
  const { data, isLoading, isError } = useTransactions();
  const { auth } = useAuthStore();
  console.log(auth);

  if (isLoading) return <Loader />;
  else if (isError) return <Error />;
  else {
    return <Transactions data={data?.data?.transactions ?? []} />;
  }
};

export default TransactionsPage;
