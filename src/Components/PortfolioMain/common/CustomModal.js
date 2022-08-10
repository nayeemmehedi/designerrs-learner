import React from "react";
import { Modal, ModalBody } from "reactstrap";

const CustomModal = ({
  modal,
  toggle,
  children,
  modalClass,
  modalBody,
  size,
}) => {
  return (
    <React.Fragment>
      <Modal isOpen={modal} toggle={toggle} size={size} className={modalClass}>
        <ModalBody className={`${modalBody}`}>{children}</ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default CustomModal;
