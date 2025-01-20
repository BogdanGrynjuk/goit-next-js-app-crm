'use client';

import React from 'react';
import PromotionForm from '@/app/components/promotion-form';
import Modal, { ModalProps } from '@/app/components/modal';

export interface PromotionFormModal extends ModalProps {
  companyId: string;
}

const PromotionFormModal = ({
  companyId,
  onClose,
  ...rest
}: PromotionFormModal) => {
  return (
    <Modal {...rest} onClose={onClose}>
      <PromotionForm companyId={companyId} onSubmit={() => onClose()} />
    </Modal>
  );
};

export default PromotionFormModal;
