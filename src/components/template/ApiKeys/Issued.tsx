import { Button } from '@components/ui/button';

const Issued = () => {
  return (
    <div className='bg-white rounded-3xl shadow-lg p-24 flex flex-col items-center'>
      <h1 className='text-2xl font-bold text-[#4196E0] text-center mb-10'>
        20241231-1234567890
      </h1>

      <div role='separator' className='w-full h-[1px] bg-light-border mb-8' />

      <div className='mb-8'>
        <p className='text-light text-sm mb-4 font-bold'>
          생성일시 : 2024-12-31 14:41:28
        </p>
        <p className='text-light text-sm mb-4 font-bold'>
          만료일시 : 2025-03-31 14:41:28
        </p>
      </div>

      <div className='mb-8'>
        <p className='text-center text-light-40 text-sm mb-2'>
          한 계정당 키는 한 개만 발급 가능합니다
        </p>
        <p className='text-center text-light-40 text-sm mb-2'>
          키의 유효기간은 3개월입니다
        </p>
        <p className='text-center text-light-40 text-sm mb-2'>
          갱신하면 새로운 키가 발급되어 기존의 키는 사용할 수 없습니다
        </p>
        <p className='text-center text-light-40 text-sm mb-2'>
          갱신은 만료기한 일주일전부터 가능합니다
        </p>
      </div>

      <div role='separator' className='w-full h-[1px] bg-light-border mb-8' />

      <Button disabled size={'rounded'}>
        갱신하기
      </Button>
    </div>
  );
};

export default Issued;
