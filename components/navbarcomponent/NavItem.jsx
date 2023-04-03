import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NavItem = ({ title, href, active }) => {
  return (
    <Link href={href} className={`nav__item ${active ? 'active' : ''}`}>
      {title}
    </Link>
  );
};

export default NavItem;