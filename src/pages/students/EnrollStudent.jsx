import { useTitle } from "@hooks";
import { useNavigate } from "react-router-dom";
import { MdArrowLeft } from "react-icons/md";
import { Headings, FormInputs, FormSelect, MyButton } from "@components";
import { Stack, Row, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { TiAttachment } from "react-icons/ti";
import { registerOptions, classTypeValues, classCohortValues } from "@utils";
import styles from "./student.module.css";

export default function EnrollStudent() {
  useTitle("Add a new student");
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="mt-5">
      <Stack direction="horizontal" className="mb-2 mb-lg-0 align-items-start">
        <MdArrowLeft
          size="30px"
          className="cursor"
          color="#1f2666"
          onClick={() => navigate("/dashboard/students")}
        />
        <Headings
          title="Add New Student"
          color="var(--mainBlue)"
          size="1.375rem"
          className="mt-1"
        />
      </Stack>
      <div className="mt-4 p-3">
        <Form onSubmit={handleSubmit(onSubmitHandler)}>
          <p className={styles.pStyle2}>Student’s Details</p>
          <Row>
            <Col md={4}>
              <FormInputs
                register={register}
                errors={errors?.fullName}
                registerOptions={registerOptions?.fullName}
                className="my-1 text-black"
                id="fullName"
                label="Full Name"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
              />
            </Col>
            <Col md={4} className="mt-3">
              <FormInputs
                register={register}
                errors={errors?.popularlyKnownAs}
                registerOptions={registerOptions?.popularlyKnownAs}
                className="my-1 text-black"
                id="popularlyKnownAs"
                label="Popularly Known As"
                name="popularlyKnownAs"
                type="text"
                placeholder="Enter name"
              />
            </Col>
            <Col md={4} className="mt-3">
              <FormInputs
                register={register}
                className="my-1 text-black"
                id="studentId"
                label="Student ID"
                name="Student ID"
                type="text"
                placeholder="Student ID"
                disabled
              />
            </Col>
            <Col md={4} className="mt-3">
              <FormSelect
                register={register}
                errors={errors?.classCohort}
                registerOptions={registerOptions?.classCohort}
                className="my-1 text-black"
                id="courseCohort"
                label="Course Cohort"
                name="courseCohort"
                data={classCohortValues}
              />
            </Col>
            <Col md={4} className="mt-3">
              <FormInputs
                register={register}
                errors={errors?.email}
                registerOptions={registerOptions?.email}
                className="my-1 text-black"
                id="email"
                label="Email Address"
                name="email"
                type="email"
                placeholder="Enter email"
              />
            </Col>
            <Col md={4} className="mt-3">
              <FormInputs
                register={register}
                errors={errors?.phoneNumber}
                registerOptions={registerOptions?.phoneNumber}
                className="my-1 text-black"
                id=" phoneNumber"
                label="Phone Number"
                name="phoneNumber"
                type="text"
                placeholder="Enter phone number"
              />
            </Col>
            <Col md={4} className="mt-3">
              <FormSelect
                register={register}
                errors={errors?.classType}
                registerOptions={registerOptions?.classType}
                className="my-1 text-black"
                id="classType"
                label="Class Type"
                name="classType"
                data={classTypeValues}
              />
            </Col>
          </Row>
          <hr className="my-5" />
          <p className={styles.pStyle2}>Other Details</p>
          <Row>
            <Col md={4}>
              <FormInputs
                register={register}
                errors={errors?.whatsAppNumber}
                registerOptions={registerOptions?.whatsAppNumber}
                className="my-1 text-black"
                id="whatsAppNumber"
                label="WhatsApp Number"
                name="whatsAppNumber"
                type="text"
                placeholder="Enter your whatsapp number"
              />
            </Col>
            <Col md={4} className="mt-3">
              <FormInputs
                register={register}
                className="my-1 text-black"
                id="referralStudentID"
                label="Referral’s Student ID"
                name="referralStudentID"
                type="text"
                placeholder="Enter Student ID"
              />
            </Col>
            <Col md={4} className="mt-3">
              <FormInputs
                register={register}
                className="my-1 text-black"
                id="referralName"
                label="Referral’s Name"
                name="referralName"
                type="text"
                placeholder="Referral’s Name"
                disabled
              />
            </Col>
            <Col md={4} className="mt-3">
              <FormInputs
                register={register}
                className="my-1 text-black"
                id="iceContactName"
                label="ICE Contact’s Name"
                name="iceContactName"
                type="text"
                placeholder="Enter your next of kin"
              />
            </Col>
            <Col md={4} className="mt-3">
              <FormInputs
                register={register}
                className="my-1 text-black"
                id="iceContactName"
                label="ICE Contact’s Number"
                name="iceContactName"
                type="text"
                placeholder="Enter your next of kin’s contact"
              />
            </Col>
            <Col md={4} className="mt-3">
              <FormInputs
                register={register}
                className="my-1 text-black"
                id="iceContactLocation"
                label="ICE Contact’s Location"
                name="iceContactLocation"
                type="text"
                placeholder="Enter your next of kin’s location"
              />
            </Col>
          </Row>
          <hr className="my-5" />
          <p className={styles.pStyle2}>Payment Details</p>
          <Row>
            <Col md={6} lg={4} className="mb-md-3 mb-lg-0">
              <FormInputs
                register={register}
                errors={errors?.depositPaid}
                registerOptions={registerOptions?.depositPaid}
                className="my-1 text-black"
                id="depositPaid"
                label="Deposit Paid Upon Enrolment"
                name="depositPaid"
                type="text"
                placeholder="0.00"
              />
            </Col>
            <Col md={6} lg={4} className="mt-3 mt-md-0">
              <div className="position-relative">
                <Form.Label className="mt-2 mt-md-1">
                  Payment Receipt
                </Form.Label>
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
                  id="paymentReceipt"
                  label="Payment Receipt"
                  name="paymentReceipt"
                  type="file"
                  accept="image/*"
                />
              </div>
            </Col>
            <Col md={6} lg={4} className="mt-3 mt-md-0">
              <div className="position-relative">
                <Form.Label className="mt-2 mt-md-1">Upload Photo</Form.Label>
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
                  errors={errors?.uploadPhoto}
                  registerOptions={registerOptions?.uploadPhoto}
                  className="my-1 w-100 position-absolute top-0 end-0 opacity-0"
                  id="uploadPhoto"
                  label="Upload Photo"
                  name="uploadPhoto"
                  type="file"
                  accept="image/*"
                />
              </div>
            </Col>
          </Row>
          <hr className="my-5" />
          <div className="d-flex flex-column flex-md-row gap-3 gap-md-4 justify-content-center justify-content-md-start ">
            <MyButton
              variant="primary"
              text="Save Changes"
              className={`${styles.btnSize} fw-bold`}
              type="submit"
              disabled={isSubmitting}
            />
            <MyButton
              variant="outline-danger"
              text="Cancel"
              className={`${styles.btnSize} fw-bold`}
            />
          </div>
        </Form>
      </div>
    </div>
  );
}
