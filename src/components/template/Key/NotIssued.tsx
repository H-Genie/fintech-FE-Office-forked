import { Button } from '@components/ui/button';
import Info from './Info';

const NotIssued = () => {
  return (
    <div className='bg-white rounded-3xl shadow-lg p-24 flex flex-col items-center'>
      <h1 className='text-2xl font-bold text-primary text-center mb-10'>
        키 발급하기
      </h1>

      <Info />

      <Button size={'rounded'}>발급하기</Button>
    </div>
  );
};

export default NotIssued;
