import { Button } from '../ui/button';

interface ErrorProps {
  message?: string;
}

const Error = ({ message = '오류가 발생했습니다.' }: ErrorProps) => {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className='flex flex-col items-center justify-center gap-4 p-8'>
      <p className='text-lg'>{message}</p>
      <Button onClick={handleRetry} variant='outline'>
        다시 시도하기
      </Button>
    </div>
  );
};

export default Error;
