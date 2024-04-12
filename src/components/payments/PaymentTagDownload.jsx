import { MyModal, Headings, MyButton } from "@components";
import { Image } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";
import { useGetAStudentData } from "@store";
import { useQuery } from "@tanstack/react-query";
import { studentsService } from "@services";
import { Spinner } from "@utils";
import { useEffect } from "react";
import styles from "./payment.module.css";
import { tsbackdrop, paymenttag } from "@assets";
import { IoShareSocial } from "react-icons/io5";
import { FaDownload } from "react-icons/fa";

export default function PaymentTagDownload({
  showDownloadPaymentTag,
  setShowDownloadPaymentTag,
  getStudentId,
}) {
  const { student, setStudent } = useGetAStudentData();

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

  console.log("pp", student);

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
        className=""
      >
        <div className={`text-center`}>
          <Image
            src={tsbackdrop}
            className={styles.imgPosition}
            alt="tstudio backdrop"
          />
          {/* <div
            className={`${styles.paymentTagBg} text-center position-relative`}
          /> */}
          <Image src={paymenttag} alt="paymentTag" />
          <Headings
            title={student.fullName}
            color="var(--mainBlack)"
            size="2rem"
          />
          <p className="fs-5 mb-0 fw-bold" style={{ color: "var(--offBlack)" }}>
            {student.studentId}
          </p>
          <p className="fs-5" style={{ color: "var(--offBlack)" }}>
            {student.courseCohort}
          </p>
          <div
            className="d-md-flex gap-3 justify-content-center"
          >
            <MyButton
              variant="primary"
              text={
                <>
                  <FaDownload />
                 &nbsp; Download As PDF
                </>
              }
              className={`${styles.btnSize} fw-bold my-3`}
            />
            <MyButton
              variant="outline-primary"
              text={
                <>
                  <IoShareSocial /> Share
                </>
              }
              className={`${styles.btnSize} fw-bold my-3`}
            />
          </div>
        </div>
      </MyModal>
    </div>
  );
}
