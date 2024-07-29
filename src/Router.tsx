import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';

import Login from './pages/Login';
import PickCulture from './pages/PickCulture';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    id: 'root',
    // errorElement: <NotFound />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'user/:userId',
        element: <PickCulture />,
      },
    ],
  },
]);

export default router;
