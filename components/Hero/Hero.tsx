import React from 'react';
import Image from 'next/image'
import styles from './Hero.module.scss';

interface HeroProps {
  title: string;
  text: string;
  image: string;
}

export const Hero = ({
  title,
  text,
  image
}: HeroProps) => {
 

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className='grid grid--center'>
          <div className='col-md-6'>
            <div className={styles.content}>
              <h1>{title}</h1>
              <p className={styles.text}>{text}</p>
            </div>
          </div>
          <div className='col-md-6'>
            <Image
              src={image}
              alt="test"
              width="500"
              height="375"
            />
          </div>
        </div>
      </div>
      <div className={styles.wave}>
        <svg className={styles.svg} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={styles.fill}></path>
        </svg>
      </div>
    </section>
  );
};
