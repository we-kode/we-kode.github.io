import React from 'react';
import styles from './HomepageFeatures.module.css';

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <img src="img/logo.svg" className='logo'></img>
        </div>
      </div>
    </section>
  );
}