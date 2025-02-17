export type LoginReq = {
  email: string;
  password: string;
};

export type Auth = {
  id: string;
  token: string;
  name: string;
};

export type LoginRes = {
  ok: boolean;
  data: Auth;
};

export type SignupReq = {
  email: string;
  password: string;
  name: string;
};

export type AuthLayoutProps = {
  children: React.ReactNode;
  linkText: string;
  linkTo: string;
};
