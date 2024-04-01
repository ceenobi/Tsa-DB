import { MyModal, Headings, MyButton } from "@components";
import { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import styles from "./payment.module.css";

export default function AddPaymentRecord({ handleClose }) {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleOpenModal = () => setShowModal(true);

  // useEffect(() => {
  //   handleClose();
  // }, [handleClose]);

  return (
    <div>
      <Stack
        direction="horizontal"
        className={`fw-bold small text-primary cursor ${styles.btnWidth}`}
        onClick={handleOpenModal}
      >
        <MdEdit />
        <span>Add Payment Record</span>
      </Stack>

      <MyModal
        show={showModal}
        handleClose={handleCloseModal}
        backdrop="static"
      >
        <div>
          <Headings
            title="Add Payment Record"
            className="text-center"
            color="var(--mainBlue)"
            size="22px"
          />
          <div className="d-flex justify-content-end align-items-center gap-3">
          </div>
            <MyButton
              variant="primary"
              text="Save Changes"
              className={`fw-bold ${styles.btnWidth}`}
              
            />
            <MyButton
              variant="danger"
              text="Cancel"
              className={`fw-bold ${styles.btnWidth}`}
              onClick={handleClose}
            />
        </div>
      </MyModal>
    </div>
  );
}
