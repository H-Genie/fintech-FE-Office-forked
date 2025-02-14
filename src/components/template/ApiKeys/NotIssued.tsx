import { Button } from '@components/ui/button';

const NotIssued = () => {
  return (
    <div className='bg-white rounded-3xl shadow-lg p-24 flex flex-col items-center'>
      <h1 className='text-2xl font-bold text-[#4196E0] text-center mb-10'>
        키 발급하기
      </h1>

      <div className='mb-8'>
        <p className='text-center text-[#212121]/40 text-sm mb-4'>
          한 계정당 키는 한개만 발급가능합니다
        </p>
        <p className='text-center text-[#212121]/40 text-sm mb-4'>
          키의 유효기간은 3개월입니다
        </p>
      </div>

      <Button size={'rounded'}>발급하기</Button>
    </div>
  );
};

export default NotIssued;
