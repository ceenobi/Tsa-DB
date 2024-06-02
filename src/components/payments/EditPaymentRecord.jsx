import { useEffect, useState } from "react";
import styles from "./payment.module.css";
import {
  MyModal,
  Headings,
  MyButton,
  FormInputs,
  FormSelect,
  EditPaymentRecordSuccess,
} from "@components";
import { paymentMethods, registerOptions } from "@utils";
import { Row, Col, Form, Stack, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { TiAttachment } from "react-icons/ti";
import { studentsService } from "@services";
import { handleAuthError } from "@config";
import { BeatLoader } from "react-spinners";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { useGetStudentPaymentId } from "@store";

const formatEditDate = (date) => {
  if (date) {
    const formattedDate = new Date(date);
    if (!isNaN(formattedDate)) {
      return formattedDate.toISOString().split("T")[0];
    }
  }
  return null;
};

export default function EditPaymentRecord({
  editPayment,
  setEditPayment,
  studentId,
  student,
  payment,
}) {
  const [preview, setPreview] = useState();
  const [selectedReceipt, setSelectedReceipt] = useState(null);
  const [editPaymentSuccess, setEditPaymentSuccess] = useState(false);
  const { studentPayment, setStudentPayment } = useGetStudentPaymentId();
  const {
    isLoading,
    isError,
    data: paymentData,
    error,
  } = useQuery({
    queryKey: ["singleStudentPayment", studentId, payment._id],
    queryFn: () =>
      studentsService.getASingleStudentPaymentRecord(studentId, payment._id),
    onError: (error) => {
      console.error("Error fetching student payment data:", error);
    },
    onLoading: () => {
      <Spinner />;
    },
  });

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();

  //store api data to zustand state
  useEffect(() => {
    if (paymentData) {
      setStudentPayment(paymentData?.data?.payment);
    }
  }, [paymentData, setStudentPayment]);

  useEffect(() => {
    if (studentPayment) {
      setValue("balance", student?.balance);
      setValue("amount", studentPayment?.amount);
      setValue("receipt", student?.totalAmountpaid);
      setValue("datePaid", formatEditDate(studentPayment?.datePaid));
    }
  }, [setValue, student, studentPayment]);

  const handleCloseEditPayment = () => setEditPayment(false);

  const handleReceiptChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      if (e.target.files[0].size > 5 * 1000 * 1000) {
        toast.error("File with maximum size of 5MB is allowed");
        return false;
      }
      setSelectedReceipt(e.target.files[0]);
      setPreview(e.target.files[0].name);
    }
  };

  const onSubmitHandler = async (data) => {
    const formData = new FormData();
    formData.append("receipt", selectedReceipt);
    formData.append("paymentType", data.paymentType);
    formData.append("amount", data.amount);
    formData.append("datePaid", data.datePaid);
    formData.append("comment", data.comment);
    try {
      const res = await studentsService.updateAStudentPaymentRecord(
        studentId,
        payment._id,
        formData
      );
      if (res.data.success) {
        setEditPaymentSuccess(true);
      }
    } catch (error) {
      handleAuthError(error);
    }
  };

  return (
    <>
      <MyModal
        show={editPayment}
        handleClose={handleCloseEditPayment}
        backdrop="static"
        size="lg"
        className={editPaymentSuccess ? "d-none" : ""}
      >
        {isError && (
          <span className="text-danger">
            {error.message ? error.message : error}
          </span>
        )}

        {!isLoading && !isError && !student && (
          <span className="text-red-400">
            You have no student payment data to display
          </span>
        )}
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="px-4">
            <Headings
              title="Edit Payment Record"
              className="text-center"
              color="var(--mainBlue)"
              size="22.5px"
            />
            <Form id="editPayment" onSubmit={handleSubmit(onSubmitHandler)}>
              <Row className="align-items-center">
                <Col md={4}>
                  <Headings
                    title="Payment Method"
                    className="fw-bold mt-4 mb-0"
                    color="var(--mainBlue)"
                    size="18px"
                  />
                </Col>
                <Col md={8}>
                  <FormSelect
                    register={register}
                    errors={errors?.classType}
                    registerOptions={registerOptions?.classType}
                    className="text-black"
                    id="paymentType"
                    name="paymentType"
                    size="lg"
                    data={paymentMethods}
                    defaultValue={student.paymentType}
                  />
                </Col>
                <Col md={4}>
                  <Headings
                    title="Receipt"
                    className="fw-bold mt-4 mb-0"
                    color="var(--mainBlue)"
                    size="18px"
                  />
                </Col>
                <Col md={8}>
                  <div className="position-relative mt-4 py-2">
                    <div
                      className={`${styles.fileUpload} rounded-2 d-flex align-items-center justify-content-between cursor`}
                    >
                      <Stack direction="horizontal" gap={2}>
                        <TiAttachment className="ms-2" color="#0266f4" />
                        <span style={{ fontSize: "10px", fontWeight: "400" }}>
                          Browse files or drag and drop here
                        </span>
                      </Stack>
                      <MyButton
                        variant="primary"
                        text="Add"
                        className={`fw-medium border border-start-0 h-auto`}
                      />
                    </div>
                    <Form.Control
                      {...register("receipt")}
                      type="file"
                      className="w-100 h-100 position-absolute bottom-0 end-0 opacity-0"
                      accept="image/*"
                      id="receipt"
                      label="Payment Receipt"
                      name="receipt"
                      onChange={handleReceiptChange}
                    />
                    {errors?.receipt?.type === "required" && !preview ? (
                      <span className="small text-danger">
                        This field is required!
                      </span>
                    ) : null}
                    {preview && (
                      <>
                        <span className="small">
                          {preview.slice(0, preview.length / 2) +
                            preview.slice(-5)}
                        </span>
                      </>
                    )}
                  </div>
                </Col>
                <Col md={4}>
                  <Headings
                    title="Amount Paid"
                    className="fw-bold mt-4 mb-0"
                    color="var(--mainBlue)"
                    size="18px"
                  />
                </Col>
                <Col md={8}>
                  <FormInputs
                    register={register}
                    errors={errors?.amount}
                    registerOptions={registerOptions?.amount}
                    className="text-black"
                    id="amount"
                    name="amount"
                    type="number"
                    size="lg"
                    placeholder={studentPayment?.amount}
                  />
                </Col>
                <Col md={4}>
                  <Headings
                    title="Balance"
                    className="fw-bold mt-4 mb-0"
                    color="var(--mainBlue)"
                    size="18px"
                  />
                </Col>
                <Col md={8}>
                  <FormInputs
                    register={register}
                    className="text-black"
                    id="balance"
                    name="balance"
                    type="number"
                    size="lg"
                    placeholder={student?.balance}
                    disabled
                  />
                </Col>
                <Col md={4}>
                  <p
                    style={{ color: "var(--mainBlue)" }}
                    className="fw-bold mt-4"
                  >
                    Date
                  </p>
                </Col>
                <Col md={8}>
                  <FormInputs
                    register={register}
                    className="text-black"
                    id="datePaid"
                    name="datePaid"
                    type="date"
                    size="lg"
                  />
                </Col>
                <Col md={4}>
                  <p
                    style={{ color: "var(--mainBlue)" }}
                    className="fw-bold mt-4"
                  >
                    Comment
                  </p>
                </Col>
                <Col md={8}>
                  <Form.Control
                    {...register("comment")}
                    className="text-black mt-4"
                    id="comment"
                    name="comment"
                    as="textarea"
                    placeholder={
                      studentPayment.comment
                        ? studentPayment.comment
                        : "Place remarks"
                    }
                    rows={4}
                  />
                </Col>
              </Row>
            </Form>

            <div className="my-4 d-md-flex justify-content-end align-items-center gap-3">
              <MyButton
                variant="primary"
                text={
                  isSubmitting ? <BeatLoader color="#ffffff" /> : "Save Record"
                }
                className={`${styles.btnSize} fw-bold mb-3 mb-md-0`}
                type="submit"
                disabled={isSubmitting}
                form="editPayment"
              />
              <MyButton
                variant="outline-danger"
                text="Cancel"
                className={`${styles.btnSize} fw-bold`}
                onClick={handleCloseEditPayment}
              />
            </div>
          </div>
        )}
      </MyModal>
      <EditPaymentRecordSuccess
        editPaymentSuccess={editPaymentSuccess}
        setEditPaymentSuccess={setEditPaymentSuccess}
        student={student.fullName}
        handleCloseEditPayment={handleCloseEditPayment}
      />
    </>
  );
}
