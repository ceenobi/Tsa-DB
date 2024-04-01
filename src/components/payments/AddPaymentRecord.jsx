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
  const { student } = useGetAStudentPaymentRecord();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleCloseModal = () => setShowModal(false);

  const onSubmitHandler = async (formData) => {
    if (!formData.image && !formData.receipt) {
      toast.error("Please provide payment receipt and profile image");
      return;
    }
    console.log(formData);
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
          size="22px"
        />
        <Form onSubmit={handleSubmit(onSubmitHandler)} id="addPayment">
          <Row className="align-items-center">
            <Col md={4}>
              <p style={{ color: "var(--mainBlue)" }} className="fw-bold mt-4">
                Payment Method
              </p>
            </Col>
            <Col md={8}>
              <FormSelect
                register={register}
                errors={errors?.classType}
                registerOptions={registerOptions?.classType}
                className="my-1 text-black"
                id="paymentMethod"
                name="paymentMethod"
                data={paymentMethods}
              />
            </Col>
            <Col md={4}>
              <p style={{ color: "var(--mainBlue)" }} className="fw-bold mt-4">
                Receipt
              </p>
            </Col>
            <Col md={8}>
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
                  className={`fw-medium border border-start-0`}
                />
              </div>
              <FormInputs
                register={register}
                errors={errors?.paymentReceipt}
                registerOptions={registerOptions?.paymentReceipt}
                className="my-1 w-100 position-absolute top-0 end-0 opacity-0"
                id="receipt"
                name="receipt"
                type="file"
                accept="image/*"
              />
            </Col>
            <Col md={4}>
              <p style={{ color: "var(--mainBlue)" }} className="fw-bold mt-4">
                Amount Paid
              </p>
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
                placeholder="Enter your initial deposit"
              />
            </Col>
            <Col md={4}>
              <p style={{ color: "var(--mainBlue)" }} className="fw-bold mt-4">
                Balance
              </p>
            </Col>
            <Col md={8}>
              <FormInputs
                register={register}
                className="my-1 text-black"
                id="balance"
                name="balance"
                type="number"
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
              />
            </Col>
            <Col md={4}>
              <p style={{ color: "var(--mainBlue)" }} className="fw-bold mt-4">
                Comments
              </p>
            </Col>
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
        <div className="my-4 d-flex justify-content-end align-items-center gap-3">
          <MyButton
            variant="primary"
            text={
              isSubmitting ? <BeatLoader color="#0266f4" /> : "Save Changes"
            }
            className={`${styles.btnSize} fw-bold`}
            type="submit"
            disabled={isSubmitting}
            form="addPayment"
          />
          <MyButton
            variant="outline-danger"
            text="Cancel"
            className={`fw-bold ${styles.btnWidth}`}
            onClick={handleCloseModal}
          />
        </div>
      </div>
    </MyModal>
  );
}
