import { Link } from 'react-router-dom';
import type { AuthLayoutProps } from '@type/auth';

const AuthLayout = ({ children, linkText, linkTo }: AuthLayoutProps) => {
  return (
    <div
      className='min-h-screen bg-[#EEF1FF] flex items-center justify-center p-4'
      style={{ background: 'linear-gradient(135deg, #89CFF0, #007BFF)' }}
    >
      <div className='w-[720px] bg-white rounded-3xl px-16 py-24 flex'>
        <div className='w-[40%] mr-12 flex flex-col items-center justify-center'>
          <img src='/logo.png' className='w-24 h-24 mb-4' alt='PAY 200 로고' />
          <h1 className='text-3xl font-bold'>PAY 200</h1>
          <p className='text-xl mt-2'>관리자 페이지</p>
          <Link to={linkTo} className='mt-4 text-blue-500 hover:underline'>
            {linkText}
          </Link>
        </div>
        <div className='w-[60%] flex pl-6'>
          <div className='w-full space-y-4'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
