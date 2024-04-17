import { MyModal, Headings, MyButton } from "@components";
import styles from "./payment.module.css";

export default function EditPaymentRecordSuccess({
  setEditPaymentSuccess,
  editPaymentSuccess,
  student,
  handleCloseEditPayment,
}) {
  //modal controls
  const handleClose = () => setEditPaymentSuccess(false);

  const redirect = () => {
    handleClose();
    handleCloseEditPayment();
  };

  return (
    <>
      <MyModal
        show={editPaymentSuccess}
        handleClose={handleClose}
        backdrop="static"
        size="md"
      >
        <div className="text-center px-4">
          <Headings
            title="Payment Record Updated!"
            color="var(--mainBlack)"
            size="1.813rem"
          />
          <p
            className={`${styles.pstyle} my-3`}
            style={{ color: "var(--mainBlack)" }}
          >
            Payment record has been updated for {student}. Kindly click continue
            to exit.
          </p>
          <MyButton
            variant="primary"
            text="Continue"
            className={`${styles.btnSize} fw-bold my-3`}
            onClick={redirect}
          />
        </div>
      </MyModal>
    </>
  );
}
