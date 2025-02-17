import { useState } from 'react';
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { useLogin } from '@hooks/useAuth';
import { ZodError } from 'zod';
import { formatZodErrors } from '@lib/zod';
import type { ZodFormErrors } from '@type/zod';
import { Link } from 'react-router-dom';
import { loginSchema } from '@schema/auth';

const LoginPage = () => {
  const { mutate: login } = useLogin();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<ZodFormErrors>({});

  const handleLogin = () => {
    try {
      loginSchema.parse({ username, password });
      setErrors({});

      const credentials = { username, password };
      login(credentials);
      // TODO: zustand로 인증 상태관리 (useLogin 훅에서 처리)
      // TODO: 메인페이지로 리다이렉트 (useLogin 훅에서 처리)
    } catch (error) {
      if (error instanceof ZodError) {
        const formattedErrors = formatZodErrors(error);
        setErrors(formattedErrors);
      }
    }
  };

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
          <Link to='/signup' className='mt-4 text-blue-500 hover:underline'>
            아직 계정이 없으신가요?
          </Link>
        </div>

        <div className='w-[60%] flex pl-6'>
          <div className='w-full space-y-4'>
            <div>
              <label className='text-sm mb-1.5 block'>아이디</label>
              <Input
                className='h-12 rounded-xl'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {errors.username && (
                <p className='text-red-500 text-sm mt-1'>{errors.username}</p>
              )}
            </div>
            <div>
              <label className='text-sm mb-1.5 block'>비밀번호</label>
              <Input
                type='password'
                className='h-12 rounded-xl'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p className='text-red-500 text-sm mt-1'>{errors.password}</p>
              )}
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
