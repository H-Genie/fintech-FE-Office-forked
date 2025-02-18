import Layout from '@components/template/Layout';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from '@components/template/auth/ProtectedRoute';

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
const SignupPage = lazy(() =>
  import('@pages/SignupPage').then((module) => ({ default: module.default })),
);

const routes = [
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: (
          <ProtectedRoute>
            <MainPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/transactions',
        element: (
          <ProtectedRoute>
            <TransactionsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/api-keys',
        element: (
          <ProtectedRoute>
            <ApiKeysPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
];
export const router = createBrowserRouter(routes);
