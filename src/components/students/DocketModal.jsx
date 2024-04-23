import { useState } from "react";
import { MyButton, MyModal, Headings } from "@components";
import styles from "./student.module.css";

export default function DocketModal() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleOpen = () => setShowModal(true);

  const pStyle = {
    fontWeight: "600",
    color: "var(--offBlack)",
    fontSize: "1.063rem",
  };

  return (
    <>
      <MyButton
        variant="primary"
        text="Download Docket"
        className={`fw-bold ${styles.btnWidth}`}
        onClick={handleOpen}
      />
      <MyModal show={showModal} handleClose={handleClose} backdrop="static">
        <div className="text-center py-5">
          <Headings
            title="Docket Downloaded Successfully!!!"
            color="var(--mainBlue)"
            size="1.438rem"
          />
          <p style={pStyle} className="my-3">
            Docket for{" "}
            <span className="text-danger">Bakare Mariam Oyelola</span> was
            confirmed successfully. Kindly check your downloads for the docket.
          </p>
          <MyButton
            variant="primary"
            text="Continue"
            className="fw-bold"
            onClick={handleClose}
          />
        </div>
      </MyModal>
    </>
  );
}
