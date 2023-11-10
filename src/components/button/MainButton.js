import styles from './MainButton.module.css'

import React from 'react';

const MainButton = ({ value, href,  ...props }) => {
  const handleClick = () => {
    // Additional logic or events you want to perform on button click
    console.log('Button clicked!');
  };

  return (
      <div className={styles.btnGrassGreen}>
        <a className={`btn btn-outline-light btn-lg`} href={href} role="button" onClick={props.onClick || handleClick} {...props}>
            {value}
        </a>
     </div>
  );
};

export default MainButton;

