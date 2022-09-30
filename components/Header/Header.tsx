import React from 'react';
import Image from 'next/image'
import { Button } from '../Button/Button'
import styles from './Header.module.scss';

interface HeaderProps {
  links: {},
  contactBtn: string,
  contactBtnUrl: string;
}

export const Header = ({
  links,
  contactBtn,
  contactBtnUrl,
}: HeaderProps) => {
 

  return (
    <header className={styles.header}>
      <div className='container'>
        <div className='grid'>
          <div className='col-md-6'>
            <Image
              src='/images/logo.svg'
              alt='Aquilia Learning'
              width='200'
              height='34'
            />
          </div>
          <div className='col-md-6'>
            <nav className={styles.nav}>
              <ul className={styles.list}>
                {links.map((item, index) => (
                  <li key={index}>{item.text}</li>
                ))}
                <li>
                  <Button border label={contactBtn} />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
