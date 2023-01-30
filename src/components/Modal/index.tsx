import React from 'react';
import { Modal } from 'native-base';

type ModalProps = {
  title: string;
  body: string;
  isVisible: boolean;
  hideModal: () => void;
};

const CustomModal = ({ title, body, isVisible, hideModal }: ModalProps) => {
  return (
    <Modal isOpen={isVisible} onClose={() => hideModal()} avoidKeyboard>
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>{body}</Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default CustomModal;
