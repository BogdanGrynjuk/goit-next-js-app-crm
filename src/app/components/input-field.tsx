'use client';

import { Field } from 'formik';
import clsx from 'clsx';
import React from 'react';

export interface InputInterfaceProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const InputField = ({ label, id, ...rest }: InputInterfaceProps) => {
  return (
    <div className="flex flex-col gap-y-2">
      {label && (
        <label
          htmlFor={id}
          className={clsx('text-gray-900 text-base font-medium leading-normal')}
        >
          {label}
        </label>
      )}
      <Field
        {...rest}
        id={id}
        className={clsx(
          'p-3 border border-solid border-gray-300 rounded bg-white shadow',
        )}
      />
    </div>
  );
};

export default InputField;
