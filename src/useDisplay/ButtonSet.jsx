import React from 'react';
import styles from './ButtonSet.module.css';

const ButtonSet = ({set, text}) => {
  function handleClick() {
    set((old) => !old);
  }

  return <button className={styles.btn} onClick={handleClick}>{text}</button>;
};

export default ButtonSet;
