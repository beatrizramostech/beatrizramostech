import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;