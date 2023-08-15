import React from 'react';
import styles from './useDisplay.module.css';

const useDisplay = (text) => {
  const [state, setState] = React.useState(false);

  const DisplayObject = () => {
    return (
      <div className={styles.object}>
        {text}:{' '}
        <span className={state ? styles.on : styles.off}>
          {state ? 'ON' : 'OFF'}
        </span>
      </div>
    );
  };

  return { DisplayObject, state, setState };
};

export default useDisplay;
