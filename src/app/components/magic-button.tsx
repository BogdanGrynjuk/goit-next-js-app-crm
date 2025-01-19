'use client';

import React, { useEffect, useState } from 'react';
import Button, { ButtonProps } from './button';

const MagiButton = (props: ButtonProps) => {
  const [count, setCount] = useState<number>(1);

  useEffect(() => {
    if (count > 2) {
      throw new Error('Unexpected error');
    }
  }, [count]);

  const handleButtonClick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <Button {...props} onClick={handleButtonClick}>
      MagiButton
    </Button>
  );
};

export default MagiButton;
