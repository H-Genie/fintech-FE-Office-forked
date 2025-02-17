export type LoginReq = {
  username: string;
  password: string;
};

export type SignupReq = {
  username: string;
  password: string;
  name: string;
};

export type AuthLayoutProps = {
  children: React.ReactNode;
  linkText: string;
  linkTo: string;
};
