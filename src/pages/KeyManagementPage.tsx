import Issued from '@components/template/ApiKeys/Issued';
import NotIssued from '@components/template/ApiKeys/NotIssued';

const KEY_ISSUED = true;

const ApiKeysPage = () => {
  return KEY_ISSUED ? <Issued /> : <NotIssued />;
};

export default ApiKeysPage;
