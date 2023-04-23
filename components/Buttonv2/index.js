import React, { useState, useEffect, useRef } from 'react';
import styles from './Buttonv2.module.css';

const Buttonv2 = ({ children, index, onClick }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setActiveIndex(null);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
      onClick();
    }
  };

  const active = index === activeIndex ? styles.active : '';

  return (
    <button ref={buttonRef} className={`${styles.button} ${active}`} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Buttonv2;