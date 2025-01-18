import Header from '@/app/components/header';
import React from 'react';

export interface PageProps {
  params: { id: string[] };
}

const Page = ({ params }: PageProps) => {
  return (
    <>
      <Header>Company ({params.id})</Header>
    </>
  );
};

export default Page;
