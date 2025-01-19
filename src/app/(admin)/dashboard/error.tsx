'use client';

import Button from '@/app/components/button';
import React from 'react';

export interface ErrorComponentProps {
  error: Error;
  reset: () => void;
}
const ErrorComponent = ({ error, reset }: ErrorComponentProps) => {
  return (
    <div>
      <p className="text-2xl text-red-500 font-bold">
        Something went wrong {error.message}
      </p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
};

export default ErrorComponent;
