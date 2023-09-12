import type { RouteObject } from 'react-router-dom';
import PBooks from '@/pages/PBooks.tsx';
import PSingle from '@/pages/PSingle.tsx';
import PRegister from '@/pages/PRegister.tsx';
import PLogin from '@/pages/PLogin.tsx';
import PCreate from '@/pages/PCreate.tsx';

const router: RouteObject[] = [
  {
    path: '/',
    element: <PBooks />,
  },
  {
    path: '/book/:id',
    element: <PSingle />,
  },
  {
    path: '/book-create',
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
