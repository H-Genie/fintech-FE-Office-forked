import Issued from '@components/template/Key/Issued';
import NotIssued from '@components/template/Key/NotIssued';
import Loader from '@components/template/Loader';
import { useKeysId } from '@hooks/api/useKeys';
import { useAuthStore } from '@store/authStore';

const ApiKeysPage = () => {
  const { auth } = useAuthStore();
  const { data, isLoading } = useKeysId(auth!.id);

  if (isLoading) return <Loader />;
  else {
    return data ? <Issued issuedApiKey={data.data.apiKey} /> : <NotIssued />;
  }
};

export default ApiKeysPage;
