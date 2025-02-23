import React, { useState } from 'react';
import { Link } from 'react-router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Nav = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home', link: '/'},
    { id: 2, text: 'About', link: '/about'},
    { id: 3, text: 'Project', link: '/project'},
    { id: 4, text: 'Contact', link: '/contact' },
  ];

  return (
    <div className='bg-primary fixed w-screen flex justify-between items-center h-24 max-w-[1600px] mx-auto px-4 2xl:px-30 text-lightGray z-40 overflow-x-hidden'>
      {/* Logo */}
      <h1 className='w-full text-xl font-bold text-lightGray'>Kcreates.</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
           
          >
            <Link  className='p-4 hover:bg-lightGray/5 rounded-sm m-2 cursor-pointer duration-300' to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden z-40'>
        {nav ? <FontAwesomeIcon icon={faXmark} size='xl' style={{color: "#ecf0f1",}} /> :<FontAwesomeIcon icon={faBars} size='xl' style={{color: "#ecf0f1",}} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-screen h-screen flex flex-col justify-center bg-primary/98 ease-in-out duration-500 z-30 gap-2'
            : 'ease-in-out w-[60%] duration-500 fixed h-screen flex flex-col justify-center top-0 bottom-0 left-[-100%]'
        }
      >

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className=' w-screen flex justify-center text-lightGray text-xl duration-300 cursor-pointer'
          >
           <Link to={item.link} className='flex justify-center items-center py-3 w-[90%] bg-lightGray/10 rounded-sm'>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;