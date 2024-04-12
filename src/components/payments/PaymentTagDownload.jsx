import { useEffect, useState } from "react";
import { MyModal, Headings, MyButton, DowloadPayTagSuccess } from "@components";
import { Image } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";
import { useGetAStudentData } from "@store";
import { useQuery } from "@tanstack/react-query";
import { studentsService } from "@services";
import { Spinner } from "@utils";
import styles from "./payment.module.css";
import { tsbackdrop, paymenttag } from "@assets";
import { IoShareSocial } from "react-icons/io5";
import { useTitle } from "@hooks";
import { usePDF } from "react-to-pdf";

const options = {
  orientation: "landscape",
  unit: "in",
  format: "letter",
};

export default function PaymentTagDownload({
  showDownloadPaymentTag,
  setShowDownloadPaymentTag,
  getStudentId,
  handleClosePayment,
}) {
  const [showPayTagSuccess, setShowPayTagSuccess] = useState(null);
  const { student, setStudent } = useGetAStudentData();
  useTitle(`Download Payment Tag for ${student?.fullName}`);
  const { toPDF, targetRef } = usePDF({
    filename: `${student.fullName} paymentTag.pdf`,
    options,
  });

  //fetch full student data
  const { data } = useQuery({
    queryKey: ["studentPaymentFullData", getStudentId],
    queryFn: () => studentsService.getAStudent(getStudentId),
    onError: (error) => {
      console.error("Error fetching student's full payment data:", error);
    },
    onLoading: () => {
      <Spinner />;
    },
  });

  //store api data to zustand state
  useEffect(() => {
    if (data) {
      setStudent(data?.data?.student);
    }
  }, [data, setStudent]);

  //modal controls
  const handleClose = () => setShowDownloadPaymentTag(false);
  const handleOpen = () => setShowDownloadPaymentTag(true);

  const downloadPaymentTag = () => {
    toPDF();
    setShowPayTagSuccess(true);
  };

  return (
    <div>
      <MyButton
        variant="primary"
        text="Generate Payment Tag"
        className={`${styles.btnSize} fw-bold my-3`}
        onClick={handleOpen}
      />
      <MyModal
        show={showDownloadPaymentTag}
        handleClose={handleClose}
        backdrop="static"
        size="md"
        backIcon={
          <IoMdClose size="30px" className="cursor" onClick={handleClose} />
        }
        className={showPayTagSuccess ? "d-none" : ""}
      >
        <div className="text-center">
          <div ref={targetRef}>
            <Image
              src={tsbackdrop}
              className={styles.imgPosition}
              alt="tstudio backdrop"
            />
            <Image src={paymenttag} alt="paymentTag" />
            <Headings
              title={student.fullName}
              color="var(--mainBlack)"
              size="2rem"
            />
            <p
              className="fs-5 mb-0 fw-bold"
              style={{ color: "var(--offBlack)" }}
            >
              {student.studentId}
            </p>
            <p className="fs-5" style={{ color: "var(--offBlack)" }}>
              {student.courseCohort}
            </p>
          </div>
          <div className="d-flex flex-column flex-md-row gap-3 justify-content-center my-3">
            <DowloadPayTagSuccess
              showPayTagSuccess={showPayTagSuccess}
              setShowPayTagSuccess={setShowPayTagSuccess}
              student={student.fullName}
              setShowDownloadPaymentTag={setShowDownloadPaymentTag}
              downloadPaymentTag={downloadPaymentTag}
              handleClosePayment={handleClosePayment}
            />
            <MyButton
              variant="outline-primary"
              text={
                <>
                  <IoShareSocial /> Share
                </>
              }
              className={`${styles.btnSize} fw-bold`}
            />
          </div>
        </div>
      </MyModal>
    </div>
  );
}
