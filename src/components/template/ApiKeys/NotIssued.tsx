import { Button } from '@components/ui/button';
import ApiKeyInfo from './ApiKeyInfo';

const NotIssued = () => {
  return (
    <div className='bg-white rounded-3xl shadow-lg p-24 flex flex-col items-center'>
      <h1 className='text-2xl font-bold text-primary text-center mb-10'>
        키 발급하기
      </h1>

      <ApiKeyInfo />

      <Button size={'rounded'}>발급하기</Button>
    </div>
  );
};

export default NotIssued;
