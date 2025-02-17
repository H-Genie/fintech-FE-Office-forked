import { useState } from 'react';
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { ZodError } from 'zod';
import { formatZodErrors } from '@lib/zod';
import type { ZodFormErrors } from '@type/zod';
import { signupSchema } from '@schema/auth';
import { useSignup } from '@hooks/useAuth';
import AuthLayout from '@components/template/auth/AuthLayout';

const SignupPage = () => {
  const { mutate: signup } = useSignup();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    passwordConfirm: '',
    name: '',
  });
  const [errors, setErrors] = useState<ZodFormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignup = () => {
    try {
      signupSchema.parse(formData);
      setErrors({});

      const credentials = {
        username: formData.username,
        password: formData.password,
        name: formData.name,
      };
      signup(credentials);
      // TODO: 사용중인 아이디일때 메세지 toast로 보여주면 좋겠음
      // TODO: 로그인 페이지로 리다이렉트 (useSignup 훅에서 처리)
    } catch (error) {
      if (error instanceof ZodError) {
        const formattedErrors = formatZodErrors(error);
        setErrors(formattedErrors);
      }
    }
  };

  return (
    <AuthLayout linkText='이미 계정이 있으신가요?' linkTo='/login'>
      <div>
        <label className='text-sm mb-2 block'>아이디</label>
        <Input
          name='username'
          className='h-12 rounded-xl'
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && (
          <p className='text-red-500 text-sm mt-1'>{errors.username}</p>
        )}
      </div>

      <div>
        <label className='text-sm mb-2 block'>비밀번호</label>
        <Input
          type='password'
          name='password'
          className='h-12 rounded-xl'
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && (
          <p className='text-red-500 text-sm mt-1'>{errors.password}</p>
        )}
      </div>

      <div>
        <label className='text-sm mb-2 block'>비밀번호 확인</label>
        <Input
          type='password'
          name='passwordConfirm'
          className='h-12 rounded-xl'
          value={formData.passwordConfirm}
          onChange={handleChange}
        />
        {errors.passwordConfirm && (
          <p className='text-red-500 text-sm mt-1'>{errors.passwordConfirm}</p>
        )}
      </div>

      <div>
        <label className='text-sm mb-2 block'>이름</label>
        <Input
          name='name'
          className='h-12 rounded-xl'
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && (
          <p className='text-red-500 text-sm mt-1'>{errors.name}</p>
        )}
      </div>

      <Button onClick={handleSignup} className='w-full h-12'>
        회원가입
      </Button>
    </AuthLayout>
  );
};

export default SignupPage;
