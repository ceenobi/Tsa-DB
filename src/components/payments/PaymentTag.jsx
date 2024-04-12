import { useState } from "react";
import { MyModal, Headings, MyButton, PaymentTagDownload } from "@components";
import styles from "./payment.module.css";

export default function PaymentTag({
  showPaymentTag,
  setShowPaymentTag,
  getStudentId,
  handleClosePayment,
}) {
  const [showDownloadPaymentTag, setShowDownloadPaymentTag] = useState(false);

  //modal controls
  const handleClose = () => setShowPaymentTag(false);
  const handleOpen = () => setShowPaymentTag(true);

  return (
    <>
      <MyButton
        variant="success"
        text="Generate Payment Tag"
        className="fw-bold"
        onClick={handleOpen}
      />
      <MyModal
        show={showPaymentTag}
        handleClose={handleClose}
        backdrop="static"
        size="md"
        className={showDownloadPaymentTag ? "d-none" : ""}
      >
        <div className="text-center px-4">
          <Headings
            title="Payment Completed Successfully"
            color="var(--mainBlack)"
            size="1.438rem"
          />
          <div className="mt-4">
            <PaymentTagDownload
              showDownloadPaymentTag={showDownloadPaymentTag}
              setShowDownloadPaymentTag={setShowDownloadPaymentTag}
              getStudentId={getStudentId}
              handleClosePayment={handleClosePayment}
            />
            <p
              className={`${styles.pStyle} cursor text-decoration-underline text-primary fw-bold`}
              onClick={handleClose}
              role="button"
            >
              Go Back
            </p>
          </div>
        </div>
      </MyModal>
    </>
  );
}
