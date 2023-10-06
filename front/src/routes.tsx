import type { RouteObject } from 'react-router-dom';
import PPosts from '@/pages/PPosts';
import PSingle from '@/pages/PSingle';
import PRegister from '@/pages/PRegister';
import PLogin from '@/pages/PLogin';
import PCreate from '@/pages/PCreate';

const router: RouteObject[] = [
  {
    path: '/',
    element: <PPosts />,
  },
  {
    path: '/news/:id',
    element: <PSingle />,
  },
  {
    path: '/news-create',
    element: <PCreate />,
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

export default router;
