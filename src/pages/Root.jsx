import { Navbar } from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <>
      <Navbar />
      <main className='container mx-auto pt-20'>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
