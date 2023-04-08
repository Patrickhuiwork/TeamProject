import React from 'react';
import styles from './Bluebutton.module.css';

const Bluebutton = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Bluebutton;
