import { useState } from "react";
import styles from "./payment.module.css";
import {
  MyModal,
  Headings,
  MyButton,
  FormInputs,
  FormSelect,
} from "@components";
import { registerOptions, paymentMethods } from "@utils";
// import { useNavigate } from "react-router-dom";
import { Row, Col, Form, Stack } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { TiAttachment } from "react-icons/ti";
import { useGetAStudentPaymentRecord } from "@store";
import { studentsService } from "@services";
import { handleAuthError } from "@config";
import { BeatLoader } from "react-spinners";
import toast from "react-hot-toast";

export default function AddPaymentRecord({ showModal, setShowModal }) {
  const [preview, setPreview] = useState();
  const { student } = useGetAStudentPaymentRecord();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleCloseModal = () => setShowModal(false);

  const onPreviewFileName = (e) => {
    if (e.target.files && e.target.files[0]) {
      if (e.target.files[0].size > 5 * 1000 * 1000) {
        toast.error("File with maximum size of 5MB is allowed");
        return false;
      }
      setPreview(e.target.files[0].name);
    }
  };

  const onSubmitHandler = async (formData) => {
    try {
      const res = await studentsService.addStudentPaymentRecord(formData);
      if (res.status === 201) {
        toast.success(`succeded`);
      }
    } catch (error) {
      handleAuthError(error);
    }
  };

  return (
    <MyModal
      show={showModal}
      handleClose={handleCloseModal}
      backdrop="static"
      size="lg"
    >
      <div className="px-4">
        <Headings
          title="Add Payment Record"
          className="text-center"
          color="var(--mainBlue)"
          size="22.5px"
        />
        <Form onSubmit={handleSubmit(onSubmitHandler)} id="addPayment">
          <Row className="align-items-center">
            <Col md={4}>
              <Headings
                title="Payment Method"
                className="fw-bold mt-4 mb-0"
                color="var(--mainBlue)"
                size="20px"
              />
            </Col>
            <Col md={8}>
              <FormSelect
                register={register}
                errors={errors?.classType}
                registerOptions={registerOptions?.classType}
                className="my-1 text-black"
                id="paymentMethod"
                name="paymentMethod"
                size="lg"
                data={paymentMethods}
              />
            </Col>
            <Col md={4}>
              <Headings
                title="Receipt"
                className="fw-bold mt-4 mb-0"
                color="var(--mainBlue)"
                size="20px"
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
                  {...register("receipt", { required: true })}
                  type="file"
                  className="w-100 h-100 position-absolute bottom-0 end-0 opacity-0"
                  accept="image/*"
                  id="receipt"
                  label="Payment Receipt"
                  name="receipt"
                  size="lg"
                  onChange={onPreviewFileName}
                />
                {errors?.receipt?.type === "required" ? (
                  <span className="small text-danger">
                    This field is required!
                  </span>
                ) : null}
                {preview && (
                  <>
                    <span className="small">
                      {preview.slice(0, preview.length / 2) + preview.slice(-5)}
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
                size="20px"
              />
            </Col>
            <Col md={8}>
              <FormInputs
                register={register}
                errors={errors?.amount}
                registerOptions={registerOptions?.amount}
                className="my-1 text-black"
                id="amount"
                name="amount"
                type="number"
                size="lg"
                placeholder="Enter your initial deposit"
              />
            </Col>
            <Col md={4}>
              <Headings
                title="Balance"
                className="fw-bold mt-4 mb-0"
                color="var(--mainBlue)"
                size="20px"
              />
            </Col>
            <Col md={8}>
              <FormInputs
                register={register}
                className="my-1 text-black"
                id="balance"
                name="balance"
                type="number"
                size="lg"
                placeholder={student.balance}
                disabled
              />
            </Col>
            <Col md={4}>
              <p style={{ color: "var(--mainBlue)" }} className="fw-bold mt-4">
                Date
              </p>
            </Col>
            <Col md={8}>
              <FormInputs
                register={register}
                className="my-1 text-black"
                id="datePaid"
                name="datePaid"
                type="date"
                size="lg"
              />
            </Col>
            <Col md={4}>Comments</Col>
            <Col md={8}>
              <FormInputs
                register={register}
                errors={errors?.amount}
                registerOptions={registerOptions?.amount}
                className="my-1 text-black"
                id="comments"
                name="comments"
                as="textarea"
                placeholder="Place remarks"
                rows={4}
              />
            </Col>
          </Row>
        </Form>
        <div className="my-4 d-md-flex justify-content-end align-items-center gap-3">
          <MyButton
            variant="primary"
            text={
              isSubmitting ? <BeatLoader color="#0266f4" /> : "Save Changes"
            }
            className={`${styles.btnSize} fw-bold mb-3 mb-md-0`}
            type="submit"
            disabled={isSubmitting}
            form="addPayment"
          />
          <MyButton
            variant="outline-danger"
            text="Cancel"
            className={`${styles.btnSize} fw-bold`}
            onClick={handleCloseModal}
          />
        </div>
      </div>
    </MyModal>
  );
}
