import { useEffect, useState } from "react";
import { MyButton, MyModal, Headings, DownloadDocket } from "@components";
import { options } from "@utils";
import { usePDF } from "react-to-pdf";
import styles from "./student.module.css";

export default function DocketModal({ student }) {
  const [showModal, setShowModal] = useState(false);
  const { toPDF, targetRef } = usePDF(
    {
      filename: `${student.fullName} docket.pdf`,
      options
    },
  );

  const handleClose = () => setShowModal(false);
  const handleOpen = () => setShowModal(true);

  useEffect(() => {
    if (showModal) {
      toPDF();
    }
  }, [showModal, toPDF]);

  return (
    <>
      <MyButton
        variant="primary"
        text="Download Docket"
        className={`fw-bold ${styles.btnWidth}`}
        onClick={handleOpen}
      />
      {showModal && <DownloadDocket targetRef={targetRef} />}
      <MyModal show={showModal} handleClose={handleClose} backdrop="static">
        <div className="text-center py-5">
          <Headings
            title="Docket Downloaded Successfully!!!"
            color="var(--mainBlue)"
            size="1.438rem"
          />
          <p className={`${styles.pStyle} my-3`}>
            Docket for <span className="text-danger">{student.fullName}</span>{" "}
            was confirmed successfully. Kindly check your downloads for the
            docket.
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
