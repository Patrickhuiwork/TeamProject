import React from 'react';
import styles from './Redbutton.module.css';

const Redbutton = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Redbutton;
