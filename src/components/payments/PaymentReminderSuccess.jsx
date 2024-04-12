import { useNavigate } from "react-router-dom";
import { MyModal, Headings, MyButton } from "@components";
import styles from "./payment.module.css";

export default function PaymentReminderSuccess({
  showSuccess,
  setShowSuccess,
  student,
  handleCloseReminder,
  handleCloseReminderForm,
  handleClosePayment,
}) {
  const navigate = useNavigate();

  //modal controls
  const handleClose = () => setShowSuccess(false);

  const redirect = () => {
    handleClose();
    handleCloseReminder();
    handleCloseReminderForm();
    handleClosePayment();
    navigate("/dashboard/payments");
  };

  return (
    <>
      <MyModal
        show={showSuccess}
        handleClose={handleClose}
        backdrop="static"
        size="md"
      >
        <div className="text-center px-4">
          <Headings
            title="Reminder Sent!!!"
            color="var(--mainBlack)"
            size="1.438rem"
          />
          <p
            className={`${styles.pstyle} my-3`}
            style={{ color: "var(--mainBlack)" }}
          >
            <b>{student}</b> - Payment reminder has been sent successfully.
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
