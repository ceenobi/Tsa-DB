import { Modal, Stack } from "react-bootstrap";

export default function MyModal({
  show,
  handleClose,
  title,
  children,
  backIcon,
  menu,
  size,
  ...props
}) {
  return (
    <Modal show={show} onHide={handleClose} centered size={size} {...props}>
      <div className="position-relative">
        <div className="d-flex justify-content-between align-items-center py-3 px-4">
          <Modal.Title
            style={{ color: "var(--mainBlue)", fontSize: "22px" }}
            className="fw-bold"
          >
            {title}
          </Modal.Title>
          <Stack direction="horizontal" className="position-relative z-3">
            {backIcon}
            {menu}
          </Stack>
        </div>
        <Modal.Body>{children}</Modal.Body>
      </div>
    </Modal>
  );
}
