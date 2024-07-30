import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';

import Login from './pages/Login';
import PickCulture from './pages/PickCulture';
import Naver from './pages/Naver';
import Home from './pages/Home';

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
        path: '/user/categorypick',
        element: <PickCulture />,
      },
    ],
  },
  {
    path: '/naver',
    element: <Naver />,
  },
  {
    path: 'home',
    element: <Home />,
  },
]);

export default router;
