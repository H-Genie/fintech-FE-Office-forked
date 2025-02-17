import { useState } from 'react';
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { useLogin } from '@hooks/useAuth';
import { z } from 'zod';
import { formatZodErrors } from '@lib/zod';
import type { ZodFormErrors } from '@type/zod';
import { useToast } from '@hooks/useToast';

const loginSchema = z.object({
  username: z.string().min(4, '아이디는 4글자 이상이어야 합니다'),
  password: z.string().min(6, '비밀번호는 6글자 이상이어야 합니다'),
});

const LoginPage = () => {
  const { toast } = useToast();
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
      // TODO: zustand로 인증 상태관리
      // TODO: 메인페이지로 리다이렉트
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors = formatZodErrors(error);
        setErrors(formattedErrors);
      } else {
        console.error('로그인 실패:', error);
        toast({
          title: '로그인 실패',
          description: '로그인 중 오류가 발생했습니다. 다시 시도해주세요.',
          variant: 'destructive',
        });
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
              {errors.username && (
                <p className='text-red-500 text-sm mt-1'>{errors.username}</p>
              )}
            </div>
            <div>
              <label className='text-sm mb-1.5 block'>Password</label>
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
