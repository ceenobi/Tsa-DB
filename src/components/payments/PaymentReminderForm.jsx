import { useState } from "react";
import {
  MyButton,
  MyModal,
  Headings,
  FormInputs,
  PaymentReminderSuccess,
} from "@components";
import { Row, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { registerOptions, formatCurrency } from "@utils";
import { studentsService } from "@services";
import { BeatLoader } from "react-spinners";
import toast from "react-hot-toast";
import { handleAuthError } from "@config";
import styles from "./payment.module.css";

const formattedDate = new Date().toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

export default function PaymentReminderForm({ student, handleCloseReminder }) {
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: student.fullName,
      studentId: student.studentId,
      email: student.email,
      phoneNumber: student.phoneNumber,
      comments: `Kindly note that you’re yet to complete your payment. The balance left to pay is ${formatCurrency(
        student.balance
      )}. Please pay up before ${formattedDate} to avoid exclusion from class.`,
    },
  });
  //modal controls
  const handleClose = () => setShowModal(false);
  const handleOpen = () => setShowModal(true);

  const onSubmitHandler = async (formData) => {
    const params = {
      studentId: student.studentId,
      comments: formData.comments,
    };
    try {
      const res = await studentsService.sendStudentPaymentReminder(params);
      if (res.status === 200) {
        toast.success(res.data.message);
        setShowSuccess(true);
      }
    } catch (error) {
      handleAuthError(error);
    }
  };

  return (
    <>
      {showSuccess ? (
        <PaymentReminderSuccess
          showSuccess={showSuccess}
          setShowSuccess={setShowSuccess}
          handleCloseReminderForm={handleClose}
          handleCloseReminder={handleCloseReminder}
          student={student.fullName}
        />
      ) : (
        <>
          <MyButton
            variant="primary"
            text="Send Reminder"
            className="fw-bold mb-3"
            onClick={handleOpen}
          />
          <MyModal
            show={showModal}
            handleClose={handleClose}
            backdrop="static"
            size="lg"
          >
            <div className="px-4">
              <Headings
                title="Payment Reminder"
                className="text-center"
                color="var(--mainBlue)"
                size="22.5px"
              />
              <Form onSubmit={handleSubmit(onSubmitHandler)} id="sendReminder">
                <Row className="align-items-center">
                  <Col md={4}>
                    <Headings
                      title="Name"
                      className="fw-bold mt-4 mb-0"
                      color="var(--mainBlue)"
                      size="20px"
                    />
                  </Col>
                  <Col md={8}>
                    <FormInputs
                      register={register}
                      errors={errors?.fullName}
                      registerOptions={registerOptions?.fullName}
                      className="my-1 text-black"
                      id="fullName"
                      name="fullName"
                      type="text"
                      size="lg"
                      placeholder={student.fullName}
                      disabled
                    />
                  </Col>
                  <Col md={4}>
                    <Headings
                      title="Student ID"
                      className="fw-bold mt-4 mb-0"
                      color="var(--mainBlue)"
                      size="20px"
                    />
                  </Col>
                  <Col md={8}>
                    <FormInputs
                      register={register}
                      className="my-1 text-black"
                      id="studentId"
                      name="studentId"
                      type="text"
                      size="lg"
                      placeholder={student.studentId}
                      disabled
                    />
                  </Col>
                  <Col md={4}>
                    <Headings
                      title="Email Address"
                      className="fw-bold mt-4 mb-0"
                      color="var(--mainBlue)"
                      size="20px"
                    />
                  </Col>
                  <Col md={8}>
                    <FormInputs
                      register={register}
                      className="my-1 text-black"
                      id="email"
                      name="email"
                      type="email"
                      size="lg"
                      placeholder={student.email}
                      disabled
                    />
                  </Col>
                  <Col md={4}>
                    <Headings
                      title="Phone No"
                      className="fw-bold mt-4 mb-0"
                      color="var(--mainBlue)"
                      size="20px"
                    />
                  </Col>
                  <Col md={8}>
                    <FormInputs
                      register={register}
                      className="my-1 text-black"
                      id=" phoneNumber"
                      name="phoneNumber"
                      type="text"
                      size="lg"
                      placeholder={student.phoneNumber}
                      disabled
                    />
                  </Col>
                  <Col md={4}>
                    <Headings
                      title="Comments"
                      className="fw-bold mt-4 mb-0"
                      color="var(--mainBlue)"
                      size="20px"
                    />
                  </Col>
                  <Col md={8}>
                    <FormInputs
                      register={register}
                      errors={errors?.comments}
                      registerOptions={registerOptions?.comments}
                      className="my-1 text-black"
                      id="comments"
                      name="comments"
                      as="textarea"
                      rows={4}
                      placeholder="Enter comment"
                    />
                  </Col>
                </Row>
              </Form>
              <div className="my-4 d-md-flex justify-content-end align-items-center gap-3">
                <MyButton
                  variant="primary"
                  text={isSubmitting ? <BeatLoader color="#0266f4" /> : "Send"}
                  className={`${styles.btnSize} fw-bold mb-3 mb-md-0`}
                  type="submit"
                  disabled={isSubmitting}
                  form="sendReminder"
                />
                <MyButton
                  variant="outline-danger"
                  text="Cancel"
                  className={`${styles.btnSize} fw-bold`}
                  onClick={handleClose}
                />
              </div>
            </div>
          </MyModal>
        </>
      )}
    </>
  );
}
