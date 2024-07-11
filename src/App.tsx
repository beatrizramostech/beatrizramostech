import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes';

const App: React.FC = () => {
  return (
    <AnimatePresence>
      <RouterProvider router={router} />
    </AnimatePresence>
  );
};

export default App;