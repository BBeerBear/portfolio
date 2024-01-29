import { Navbar } from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <>
      <Navbar />
      <main className='w-full h-screen pt-20 container mx-auto'>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
