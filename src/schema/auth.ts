import { z } from 'zod';

export const loginSchema = z.object({
  username: z.string().min(4, '아이디는 4글자 이상이어야 합니다'),
  password: z.string().min(6, '비밀번호는 6글자 이상이어야 합니다'),
});

export const signupSchema = z
  .object({
    username: z.string().min(4, '아이디는 4글자 이상이어야 합니다'),
    password: z.string().min(6, '비밀번호는 6글자 이상이어야 합니다'),
    passwordConfirm: z.string().min(6, '비밀번호는 6글자 이상이어야 합니다'),
    name: z.string().min(2, '이름은 2글자 이상이어야 합니다'),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: '비밀번호가 일치하지 않습니다',
    path: ['passwordConfirm'],
  });
