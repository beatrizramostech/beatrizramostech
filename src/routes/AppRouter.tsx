import React from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import About from '../pages/About';
import Container from '../components/Container';
import Contact from '../pages/Contact';

const AppRouter = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Container>
              <Home />
            </Container>
          }
        />
        <Route
          path="/contact"
          element={
            <Container>
              <Contact/>
            </Container>
          }
        />
        <Route
          path="/about"
          element={
            <Container>
              <About />
            </Container>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRouter;