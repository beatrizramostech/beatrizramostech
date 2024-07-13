import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { Router as RemixRouter } from '@remix-run/router';
import AppRouter from './AppRouter';

const routes: RouteObject[] = [
  {
    path: '/*',
    element: <AppRouter />,
  },
];

const router: RemixRouter = createBrowserRouter(routes);

export default router;