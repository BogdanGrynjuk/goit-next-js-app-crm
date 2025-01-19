'use client';

import React, { useState } from 'react';

import Button from '@/app/components/button';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
// import CompanyFormModal from './company-form-modal';

const CompanyFormModal = dynamic(() => import('./company-form-modal'), {
  ssr: false,
});

const AddCompanyButton = () => {
  const router = useRouter();
  return (
    <Button onClick={() => router.push('/companies/new')}>Add company</Button>
  );
};

export default AddCompanyButton;
