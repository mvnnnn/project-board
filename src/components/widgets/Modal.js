import React from "react";

import "./modal.scss";
import { Modal, Button } from "react-bootstrap";

const ModalComponent = ({
  show,
  onHide,
  ModalTitle,
  addAdd,
  addBtnLabel,
  children
}) => {
  return (
    <Modal className="model" backdrop={false} show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{ModalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button
          id="cancel"
          bsStyle="white"
          className="model_button model_btn_cancel"
          onClick={onHide}
        >
          Cancel
        </Button>
        <Button
          id="submit"
          bsStyle="Green"
          className="model_button model_btn_create"
          onClick={() => addAdd()}
        >
          {addBtnLabel}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
