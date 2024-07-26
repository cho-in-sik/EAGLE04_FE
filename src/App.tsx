// import { RouterProvider } from 'react-router-dom';
// import router from './Router';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import GlobalStyle from './global';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <GlobalStyle /> */}
        {/* <RouterProvider router={router} /> */}

        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
