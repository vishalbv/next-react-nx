import styles from './ui.module.css';
import { ReactComponent as Icon } from './hat.svg';
import Image2 from './hat.svg';
import React from 'react';
// const Image = React.lazy(() => import('next/image'));
// import Image from 'next/image';
export function Ui({ fromNext }) {
  console.log(fromNext, ';;;', Icon);
  const login = () => {
    if (fromNext) {
      document.cookie = 'auth=test';
    } else {
      document.cookie = 'auth=""';
    }
    // window.location.reload();
    window.open(window.location.origin, '_self');
  };
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui!</h1>
      <button onClick={login}>{fromNext ? 'login' : 'logout'}</button>

      {fromNext ? <img src={Image2.src} /> : <Icon />}
    </div>
  );
}
export default Ui;
