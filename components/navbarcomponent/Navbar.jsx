import Link from 'next/link'
import React, { useState } from 'react'
import NavItem from './NavItem'

const MENU_LIST = [
    {
        title: "Quizzes",
        href:"/"
    },
    {
        title: "Learn More",
        href:"/"
    },
    {
        title: "About Us",
        href:"/"
    },
    {
        title: "Tutorial",
        href:"/"
    },
    {
        title: "Resources",
        href:"/"
    }
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
      <header>
          <nav className='nav'>
                <Link href={"/"} legacyBehavior>
                        
                    <img src="/logos/horizontallogov2.svg" alt="heathelp" className="logo" />
               
                </Link>

              <div className="nav__menu-bar" onClick={toggleMenu}>
                  <div className={`nav__menu-bar-line ${isOpen ? 'open' : ''}`}></div>
                  <div className={`nav__menu-bar-line ${isOpen ? 'open' : ''}`}></div>
                  <div className={`nav__menu-bar-line ${isOpen ? 'open' : ''}`}></div>
              </div>

              <div className={`nav__menu-list ${isOpen ? 'open' : ''}`}>
                  {
                      MENU_LIST.map((menu, idx) => {
                          return <div key={menu.text}>
                              <NavItem {...menu} onClick={closeMenu} />
                          </div>
                      })
                  }

              </div>
          </nav>
      </header>
  );
}

export default Navbar