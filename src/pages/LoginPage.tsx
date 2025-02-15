import { useState } from 'react';
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { useLogin } from '@hooks/useAuth';

const LoginPage = () => {
  const { mutate: login } = useLogin();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!username || !password) {
      return alert('모든 정보를 입력해주세요');
    }

    const credentials = { username, password };
    try {
      await login(credentials);
      // TODO: 메인페이지로 리다이렉트
    } catch (error) {
      console.error('로그인 실패:', error);
      // TODO: 에러 메시지 표시 (예: 토스트 메시지)
    }
  };

  // TODO: 유효성 검사
  return (
    <div
      className='min-h-screen bg-[#EEF1FF] flex items-center justify-center p-4'
      style={{ background: 'linear-gradient(135deg, #89CFF0, #007BFF)' }}
    >
      <div className='w-[720px] bg-white rounded-3xl px-16 py-24 flex'>
        <div className='w-[40%] mr-12 flex flex-col items-center justify-center first-line:pr-6'>
          <img src='/logo.png' className='w-24 h-24 mb-4' />
          <h1 className='text-3xl font-bold'>PAY 200</h1>
          <p className='text-xl mt-2'>관리자 페이지</p>
        </div>

        <div className='w-[60%] flex pl-6'>
          <div className='w-full space-y-4'>
            <div>
              <label className='text-sm mb-1.5 block'>ID</label>
              <Input
                className='h-12 rounded-xl'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label className='text-sm mb-1.5 block'>Password</label>
              <Input
                type='password'
                className='h-12 rounded-xl'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button onClick={handleLogin} className='w-full h-12'>
              로그인
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
