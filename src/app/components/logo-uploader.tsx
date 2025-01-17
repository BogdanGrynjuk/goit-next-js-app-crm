'use client';

import React from 'react';
import Image from 'next/image';

export interface LogoUploaderProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}
const LogoUploader = ({
  label,
  placeholder,
  id,
  ...rest
}: LogoUploaderProps) => {
  return (
    <div className="flex gap-5 mb-3">
      {label && (
        <p className="text-base color-gray-900 font-medium leading-normal">
          {label}
        </p>
      )}
      <label
        htmlFor={id}
        className="flex flex-col items-center justify-center gap-y-1 w-44 h-44 bg-white border border-slate-900 border-dashed rounded-full cursor-pointer"
      >
        <Image width={48} height={48} src="/icons/upload.svg" alt="upload" />
        {placeholder && (
          <p className="text-base text-gray-500">{placeholder}</p>
        )}
        <input
          {...rest}
          id={id}
          type="file"
          accept="image/*"
          className="hidden"
        />
      </label>
    </div>
  );
};

export default LogoUploader;
