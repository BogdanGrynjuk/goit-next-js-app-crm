'use client';

import React from 'react';
import clsx from 'clsx';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

const Button = ({ disabled, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={clsx(
        'px-5 py-2.5 rounded  bg-gray-900 text-center text-base font-medium leading-normal text-zinc-50',
        !disabled && 'hover:bg-gray-800 active:bg-gray-950',
        disabled && 'text-zinc-100 cursor-not-allowed',
      )}
    />
  );
};

export default Button;
