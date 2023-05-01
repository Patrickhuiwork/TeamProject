import React from 'react';
import styles from './Learnbutton.module.css';

const Learnbutton = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Learnbutton;
