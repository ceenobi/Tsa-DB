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
    <Modal show={show} onHide={handleClose} centered {...props} size={size}>
      <div className="d-flex justify-content-between align-items-center py-3 px-4">
        <Modal.Title
          style={{ color: "var(--mainBlue)", fontSize: "22px" }}
          className="fw-bold"
        >
          {title}
        </Modal.Title>
        <Stack direction="horizontal">
          {backIcon}
          {menu}
        </Stack>
      </div>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}
