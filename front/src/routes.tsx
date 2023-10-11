import type { RouteObject } from 'react-router-dom';
import PPosts from '@/pages/PPosts';
import PSingle from '@/pages/PSingle';
import PRegister from '@/pages/PRegister';
import PLogin from '@/pages/PLogin';
import PCreate from '@/pages/PCreate';
import PNotFound from '@/pages/PNotFound';

export const privateRoute: RouteObject[] = [
  {
    path: '*',
    element: <PNotFound />,
  },
  {
    path: '/',
    element: <PPosts />,
  },
  {
    path: '/posts/:id',
    element: <PSingle />,
  },
  {
    path: '/create-post',
    element: <PCreate />,
  },
];

export const publicRoute: RouteObject[] = [
  {
    path: '*',
    element: <PNotFound />,
  },
  {
    path: '/login',
    element: <PLogin />,
  },
  {
    path: '/register',
    element: <PRegister />,
  },
];
