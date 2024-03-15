import { Modal } from "react-bootstrap";

export default function MyModal({
  show,
  handleClose,
  title,
  children,
  backIcon,
  Menu,
  ...props
}) {
  return (
    <Modal show={show} onHide={handleClose} centered {...props} size="md">
      <div className="d-flex justify-content-between align-items-center p-3">
        {backIcon}
        <Modal.Title style={{ color: "var(--mainBlue)" }} className="fw-bold">
          {title}
        </Modal.Title>
        {Menu}
      </div>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}

