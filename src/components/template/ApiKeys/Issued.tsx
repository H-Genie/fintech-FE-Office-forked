import { Button } from '@components/ui/button';
import ApiKeyInfo from './ApiKeyInfo';
import Separator from './Separator';
import { createToastSuccess } from '@lib/toast';

const Issued = () => {
  const handleCopy = () => {
    const apiKey = document.getElementById('api-key')!.textContent!;
    navigator.clipboard.writeText(apiKey).then(() => {
      createToastSuccess('', 'API 키를 복사하였습니다.');
    });
  };

  return (
    <div className='bg-white rounded-3xl shadow-lg p-24 flex flex-col items-center'>
      <h1
        className='text-2xl font-bold text-primary text-center mb-4'
        id='api-key'
      >
        20241231-1234567890
      </h1>

      <p
        className='mb-4 text-primary cursor-pointer hover:underline'
        onClick={handleCopy}
      >
        복사하기
      </p>

      <Separator />

      <ApiKeyInfo />

      <Separator />

      <Button size={'rounded'}>갱신하기</Button>
    </div>
  );
};

export default Issued;
