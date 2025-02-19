import Issued from '@components/template/Key/Issued';
import NotIssued from '@components/template/Key/NotIssued';

const KEY_ISSUED = true;

const ApiKeysPage = () => {
  return KEY_ISSUED ? <Issued /> : <NotIssued />;
};

export default ApiKeysPage;
