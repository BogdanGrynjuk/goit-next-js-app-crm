import Header from '@/app/components/header';

import React from 'react';

interface PageProps {}
const page = ({}: PageProps) => {
  return (
    <main>
      <Header>Dashboard Page / New Companies</Header>
      <div>Some additional info</div>
    </main>
  );
};

export default page;
