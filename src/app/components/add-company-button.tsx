'use client';

import React, { useState } from 'react';

import Button from '@/app/components/button';
import dynamic from 'next/dynamic';
// import CompanyFormModal from './company-form-modal';

const CompanyFormModal = dynamic(() => import('./company-form-modal'), {
  ssr: false,
});

const AddCompanyButton = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>Add company</Button>
      {isModalOpen && (
        <CompanyFormModal
          show={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={console.log}
        />
      )}
    </>
  );
};

export default AddCompanyButton;
