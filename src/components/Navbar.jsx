import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <header>
      <nav className='bg-white p-3 shadow-lg'>
        <div className='flex items-center justify-between'>
          <Link to='/' className='text-sky-500 font-mono font-bold'>
            LIMIN XIONG
          </Link>
          <div className='flex items-center gap-4'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? 'text-sky-500 font-semibold' : undefined
              }
              end
            >
              <button>About</button>
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
            <NavLink
              to='/contact'
              className={({ isActive }) =>
                isActive ? 'text-sky-500 font-semibold' : undefined
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};
