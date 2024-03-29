import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Root from './pages/Root';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const routes = [
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'projects', element: <Projects /> },
      { path: 'skills', element: <Skills /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
];

const router = createBrowserRouter(routes, {
  basename: import.meta.env.DEV ? '/' : '/portfolio/',
});

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
