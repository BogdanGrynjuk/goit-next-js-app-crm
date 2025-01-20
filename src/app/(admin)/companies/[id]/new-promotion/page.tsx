'use client';

import React from 'react';
import PromotionForm from '@/app/components/promotion-form';

export interface PageProps {
  params: { id: string };
}

const Page = ({ params }: PageProps) => {
  return (
    <div className="py-6 px-10">
      <PromotionForm companyId={params.id} />
    </div>
  );
};

export default Page;
