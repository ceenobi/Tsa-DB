import { useEffect, useState } from "react";
import { MyButton, MyModal, Headings, PaymentReminderForm } from "@components";
import { useQuery } from "@tanstack/react-query";
import { studentsService } from "@services";
import { useGetAStudentData } from "@store";
import { Spinner } from "@utils";
import styles from "./payment.module.css";

export default function PaymentReminder({ getStudentId }) {
  const [showModal, setShowModal] = useState(false);
  const { student, setStudent } = useGetAStudentData();
  //modal controls
  const handleClose = () => setShowModal(false);
  const handleOpen = () => setShowModal(true);

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

  return (
    <>
      <MyButton
        variant="danger"
        text="Send Reminder"
        className="fw-bold"
        onClick={handleOpen}
        disabled={student.balance === 0}
      />
      <MyModal
        show={showModal}
        handleClose={handleClose}
        backdrop="static"
        size="md"
      >
        <div className="text-center px-3">
          <Headings
            title={`${student.fullName} is yet to complete payment!!!`}
            color="var(--mainRed)"
            className={`${styles.h1}`}
          />
          <div className="mt-4">
            <PaymentReminderForm
              student={student}
              handleCloseReminder={handleClose}
            />
            <p
              className={`${styles.pStyle} cursor text-underline text-primary fw-bold`}
              onClick={handleClose}
            >
              Go Back
            </p>
          </div>
        </div>
      </MyModal>
    </>
  );
}
