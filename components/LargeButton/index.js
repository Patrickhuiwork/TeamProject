import React from 'react';
import styles from './LargeButton.module.css';

const largeButton = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default largeButton;
