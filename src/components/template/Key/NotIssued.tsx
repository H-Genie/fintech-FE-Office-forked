import { Button } from '@components/ui/button';
import Info from './Info';

const NotIssued = () => {
  // const handleIssue = () => {
  //   // TODO: 키 발급 API 호출
  //   // TODO: 성공 후 Issued 컴포넌트로 이동 => 컴포넌트 렌더를 결정하는 변수가 상위 컴포넌트에 있음
  // };

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
