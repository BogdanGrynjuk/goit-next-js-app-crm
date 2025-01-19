'use client';

import React from 'react';

export interface ErrorComponentProps {
  error: Error;
}
const ErrorComponent = ({ error }: ErrorComponentProps) => {
  return (
    <div>
      <p className="text-2xl text-red-500 font-bold">
        Unexpected error inside slot sales {error.message}
      </p>
    </div>
  );
};

export default ErrorComponent;
