import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { Toaster } from '@components/ui/toaster';

// if (process.env.NODE_ENV === 'development') {
//   const { worker } = await import('@mocks/browser');
//   worker.start();
// }

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
