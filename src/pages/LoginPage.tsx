import { useState } from 'react';
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { useLogin } from '@hooks/useAuth';
import { ZodError } from 'zod';
import { formatZodErrors } from '@lib/zod';
import type { ZodFormErrors } from '@type/zod';
import { loginSchema } from '@schema/auth';
import AuthLayout from '@components/template/auth/AuthLayout';

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
    <AuthLayout linkText='아직 계정이 없으신가요?' linkTo='/signup'>
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
    </AuthLayout>
  );
};

export default LoginPage;
