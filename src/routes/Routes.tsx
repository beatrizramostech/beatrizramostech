import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { Router as RemixRouter } from '@remix-run/router';  // Importando o tipo correto
import Home from '../pages/Home';
import About from '../pages/About';
import Container from '../components/Container';

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <Container>
        <Home />
      </Container>
    ),
  },
  {
    path: '/services',
    element: (
      <Container>
        <></>
      </Container>
    ),
  },
  {
    path: '/about',
    element: (
      <Container>
        <About />
      </Container>
    ),
  },
];

const router: RemixRouter = createBrowserRouter(routes);

export default router;