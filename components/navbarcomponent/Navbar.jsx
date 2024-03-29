import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import NavItem from './NavItem';

const MENU_LIST = [
  {
    title: 'Home',
    href: '/getstarted',
  },
  {
    title: 'Learning',
    href: '/learning',
  },
  {
    title: 'Quizzes',
    href: '/Quizzes',
  },
  {
    title: 'About Us',
    href: '/about',
  },
  {
    title: 'Tutorial',
    href: '/tutorial',
  },
  {
    title: 'Resources',
    href: '/resources',
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      closeMenu();
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleNavItemClick = () => {
    closeMenu();
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header>
      <nav className='nav'>
        <Link href={'/getstarted'} legacyBehavior>
          <Image
            src='/Logo/horizontal logo v2.svg'
            width='200'
            height='50'
            alt='heathelp'
            className='logo'
          />
        </Link>

        <div className='nav__menu-bar' onClick={toggleMenu}>
          <div className={`nav__menu-bar-line ${isOpen ? 'open' : ''}`}></div>
          <div className={`nav__menu-bar-line ${isOpen ? 'open' : ''}`}></div>
          <div className={`nav__menu-bar-line ${isOpen ? 'open' : ''}`}></div>
        </div>

        <div ref={menuRef} className={`nav__menu-list ${isOpen ? 'open' : ''}`} onClick={closeMenu}>
          {MENU_LIST.map((menu) => {
            return (
              <div key={menu.title}>
                <NavItem {...menu} onClick={handleNavItemClick} />
              </div>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;