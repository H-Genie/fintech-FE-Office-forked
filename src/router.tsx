import Layout from '@components/template/Layout';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const MainPage = lazy(() =>
  import('@pages/MainPage').then((module) => ({ default: module.default })),
);
const LoginPage = lazy(() =>
  import('@pages/LoginPage').then((module) => ({ default: module.default })),
);
const TransactionsPage = lazy(() =>
  import('@pages/TransactionsPage').then((module) => ({
    default: module.default,
  })),
);
const ApiKeysPage = lazy(() =>
  import('@pages/ApiKeysPage').then((module) => ({ default: module.default })),
);

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/transactions',
        element: <TransactionsPage />,
      },
      {
        path: '/api-keys',
        element: <ApiKeysPage />,
      },
    ],
  },
];
export const router = createBrowserRouter(routes);
