import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Home from '../pages/Home';
import Container from '../components/Container'; // Importe o Container

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <Container>
        <Home />
      </Container>
    ),
  }
  // Adicione outras rotas conforme necessário
];

const router = createBrowserRouter(routes);

export default router;
