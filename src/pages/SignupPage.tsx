import { useState } from 'react';
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { ZodError } from 'zod';
import { formatZodErrors } from '@lib/zod';
import type { ZodFormErrors } from '@type/zod';
import { Link } from 'react-router-dom';
import { signupSchema } from '@schema/auth';
import { useSignup } from '@hooks/useAuth';

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
    <div
      className='min-h-screen bg-[#EEF1FF] flex items-center justify-center p-4'
      style={{ background: 'linear-gradient(135deg, #89CFF0, #007BFF)' }}
    >
      <div className='w-[720px] bg-white rounded-3xl px-16 py-24 flex'>
        <div className='w-[40%] mr-12 flex flex-col items-center justify-center'>
          <img src='/logo.png' className='w-24 h-24 mb-4' />
          <h1 className='text-3xl font-bold'>PAY 200</h1>
          <p className='text-xl mt-2'>관리자 페이지</p>
          <Link to='/login' className='mt-4 text-blue-500 hover:underline'>
            이미 계정이 있으신가요?
          </Link>
        </div>

        <div className='w-[60%] flex pl-6'>
          <div className='w-full space-y-4'>
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
                <p className='text-red-500 text-sm mt-1'>
                  {errors.passwordConfirm}
                </p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
