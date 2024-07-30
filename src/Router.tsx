import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';

import Login from './pages/Login';
import PickCulture from './pages/PickCulture';
import Naver from './pages/Naver';
import Home from './pages/Home';

import SelfLogin from './pages/SelfLogin';
import checkTokenCategory from './utils/loaders';
import CategoryHome from './pages/CategoryHome';
import Quiz from './pages/Quiz';

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
        path: '/self-login',
        element: <SelfLogin />,
      },

      {
        path: '/user/categorypick',
        element: <PickCulture />,
        loader: checkTokenCategory,
      },
    ],
  },
  {
    path: '/naver',
    element: <Naver />,
  },
  {
    path: 'home/:category',
    element: <Home />,
  },
  {
    path: 'category-home',
    element: <CategoryHome />,
  },
  {
    path: 'quiz',
    element: <Quiz />,
  },
]);

export default router;
