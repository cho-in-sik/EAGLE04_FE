import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';

import Login from './pages/Login';
import PickCulture from './pages/PickCulture';
import Naver from './pages/Naver';
import Home from './pages/Home';

import SelfLogin from './pages/SelfLogin';
// import { checkToken, checkTokenCategory } from './utils/loaders';
import CategoryHome from './pages/CategoryHome';
import Quiz from './pages/Quiz';
import QuizSolve from './pages/QuizSolve';
import QuizComplete from './pages/QuizComplete';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    // loader: checkToken,
    id: 'root',
    // errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <Login />,
      },
      {
        path: '/self-login',
        element: <SelfLogin />,
      },

      {
        path: '/user/categorypick',
        element: <PickCulture />,
        // loader: checkTokenCategory,
      },
    ],
  },
  {
    path: '/naver',
    element: <Naver />,
  },
  {
    path: 'home/:categoryId',
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
  {
    path: 'quiz-solve/:categoryId',
    element: <QuizSolve />,
  },
  {
    path: '/quiz-complete/:categoryId',
    element: <QuizComplete />,
  },
]);

export default router;
