import React from 'react';
import Link from 'next/link';

const NavItem = ({ title, href }) => {
  return (
    <Link href={href} passHref>
      <legacyBehavior className="nav__menu-item">{title}</legacyBehavior>
    </Link>
  );
};

export default NavItem;