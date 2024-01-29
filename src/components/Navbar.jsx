import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  AiOutlineClose,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineWechat,
} from 'react-icons/ai';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import avatar from '../assets/avatar/ted.jpg';

export const Navbar = () => {
  const [leftNav, setLeftNav] = useState(false);

  const handleLeftNav = () => {
    setLeftNav((prevNav) => !prevNav);
  };

  return (
    <header className='fixed w-full h-14 shadow-xl z-[100] bg-white'>
      <div className='flex items-center justify-between w-full h-full px-2 2xl:px-16'>
        <Link
          to='/'
          className='flex items-center justify-center text-sky-500 font-mono font-bold rounded-lg border-sky-500 border-2 px-4 py-1 shadow-lg'
        >
          LX
        </Link>
        <div>
          <ul className='hidden md:flex items-center uppercase gap-2'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? 'text-sky-500 font-semibold' : undefined
              }
              end
            >
              About
            </NavLink>
            <NavLink
              to='/projects'
              className={({ isActive }) =>
                isActive ? 'text-sky-500 font-semibold' : undefined
              }
            >
              Projects
            </NavLink>
            <NavLink
              to='/skills'
              className={({ isActive }) =>
                isActive ? 'text-sky-500 font-semibold' : undefined
              }
            >
              Skills
            </NavLink>
            {/* <NavLink
              to='/contact'
              className={({ isActive }) =>
                isActive ? 'text-sky-500 font-semibold' : undefined
              }
            >
              Contact
            </NavLink> */}
          </ul>
          <div onClick={handleLeftNav} className='md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* LeftNav */}
      <div
        className={
          leftNav
            ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/50'
            : ''
        }
      >
        <div
          className={
            leftNav
              ? 'fixed left-0 top-0 w-[70%] sm:w-[60%] md:w-[45%] h-screen bg-white py-8 px-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 py-8 px-10 ease-in dduration-500'
          }
        >
          <div className='flex flex-col gap-10'>
            <div className='flex justify-between items-center w-full'>
              <Link to='/' className='text-sky-500 font-mono font-bold'>
                LX
              </Link>
              <div onClick={handleLeftNav}>
                <AiOutlineClose />
              </div>
            </div>
            <div className='flex flex-col gap-3 border-b border-gray-300 py-2'>
              <div className='flex items-center justify-center w-3/5'>
                <img src={avatar} alt='' className='rounded-full' />
              </div>
              <div className='font-bold'>Limin Xiong</div>
              <div className='text-md text-slate-500'>
                "Money is the motivation."
              </div>
            </div>
            <div>
              <ul className='uppercase flex flex-col gap-6'>
                <NavLink
                  to='/'
                  className={({ isActive }) =>
                    isActive ? 'text-sky-500 font-semibold' : undefined
                  }
                  end
                >
                  About
                </NavLink>
                <NavLink
                  to='/projects'
                  className={({ isActive }) =>
                    isActive ? 'text-sky-500 font-semibold' : undefined
                  }
                >
                  Projects
                </NavLink>
                <NavLink
                  to='/skills'
                  className={({ isActive }) =>
                    isActive ? 'text-sky-500 font-semibold' : undefined
                  }
                >
                  Skills
                </NavLink>
                {/* <NavLink
                  to='/contact'
                  className={({ isActive }) =>
                    isActive ? 'text-sky-500 font-semibold' : undefined
                  }
                >
                  Contact
                </NavLink> */}
              </ul>
              <div className='flex items-center justify-between mt-40'>
                <a
                  href='https://www.linkedin.com/in/liminxiong/'
                  className='rounded-full shadow-md cursor-pointer p-4 hover:scale-105 ease-in duration-300'
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href='https://github.com/BBeerBear'
                  className='rounded-full shadow-md cursor-pointer p-4 hover:scale-105 ease-in duration-300'
                >
                  <FaGithub size={20} />
                </a>
                <div className='rounded-full shadow-md cursor-pointer p-4 hover:scale-105 ease-in duration-300'>
                  <AiOutlineMail size={20} />
                </div>
                <a
                  href='https://www.facebook.com/profile.php?id=100084300735220'
                  className='rounded-full shadow-md cursor-pointer p-4 hover:scale-105 ease-in duration-300'
                >
                  <FaFacebook size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
