import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  primary?: boolean;
  border?: boolean;
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  border,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? styles['button--primary'] : styles['button--secondary'];
  const borderStyle = border ? styles['button--border']: '';

  return (
    <button
      type="button"
      className={[styles.button, mode, borderStyle].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};
