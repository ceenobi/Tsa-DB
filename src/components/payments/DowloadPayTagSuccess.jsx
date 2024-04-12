import { useNavigate } from "react-router-dom";
import { MyModal, Headings, MyButton } from "@components";
import { FaDownload } from "react-icons/fa";
import styles from "./payment.module.css";

export default function DowloadPayTagSuccess({
  showPayTagSuccess,
  setShowPayTagSuccess,
  setShowDownloadPaymentTag,
  student,
  downloadPaymentTag,
  handleClosePayment,
}) {
  const navigate = useNavigate();

  //modal controls
  const handleClose = () => setShowPayTagSuccess(false);

  const redirect = () => {
    handleClose();
    setShowDownloadPaymentTag(false);
    handleClosePayment();
    navigate("/dashboard/payments");
  };

  return (
    <>
      <MyButton
        variant="primary"
        text={
          <>
            <FaDownload />
            &nbsp; Download As PDF
          </>
        }
        className={`${styles.btnSize} fw-bold`}
        onClick={downloadPaymentTag}
      />
      <MyModal
        show={showPayTagSuccess}
        handleClose={handleClose}
        backdrop="static"
        size="md"
      >
        <div className="text-center px-4">
          <Headings
            title="File Downloaded!"
            color="var(--mainBlack)"
            size="1.813rem"
          />
          <p
            className={`${styles.pstyle} my-3`}
            style={{ color: "var(--mainBlack)" }}
          >
            <b>{student}</b> - Payment tag has been downloaded successfully,
            check your download folder to view file.
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
