import React from 'react';
import Image from 'next/image'
import styles from './Footer.module.scss';

interface FooterProps {
  text: string;
  email: string,
  contactDetails: any;
}

export const Footer = ({
  text,
  email,
  contactDetails,
  ...props
}: FooterProps) => {
 

  return (
   <footer className={styles.footer}>
     <Image
        src='/images/logo.svg'
        alt="Aquilia"
        width="500"
        height="375"
      />
     <p>{text}</p>
     <p>{email}</p>
   </footer>
  );
};
