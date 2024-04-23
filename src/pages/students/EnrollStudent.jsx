import { useState } from "react";
import { useTitle } from "@hooks";
import { useNavigate } from "react-router-dom";
import { MdArrowLeft } from "react-icons/md";
import { Headings, FormInputs, FormSelect, MyButton } from "@components";
import { Stack, Row, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { TiAttachment } from "react-icons/ti";
import { registerOptions, classTypeValues, classCohortValues } from "@utils";
import { studentsService } from "@services";
import { handleAuthError } from "@config";
import { BeatLoader } from "react-spinners";
import toast from "react-hot-toast";
import styles from "./student.module.css";

export default function EnrollStudent() {
  useTitle("Add a new student");
  const [preview, setPreview] = useState();
  const [preview1, setPreview1] = useState();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedReceipt, setSelectedReceipt] = useState(null);

  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: "",
      pka: "",
      courseCohort: "",
      email: "",
      phoneNumber: "",
      classType: "",
      image: null,
      whatsappNumber: "",
      referralStudentId: "",
      emergencyContactName: "",
      emergencyContactNumber: "",
      emergencyContactLocation: "",
      amount: "",
      receipt: "",
    },
  });

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

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      if (e.target.files[0].size > 5 * 1000 * 1000) {
        toast.error("File with maximum size of 5MB is allowed");
        return false;
      }
      setSelectedImage(e.target.files[0]);
      setPreview1(e.target.files[0].name);
    }
  };

  const onSubmitHandler = async (data) => {
    const formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("receipt", selectedReceipt);
    formData.append("fullName", data.fullName);
    formData.append("pka", data.pka);
    formData.append("courseCohort", data.courseCohort);
    formData.append("email", data.email);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("classType", data.classType);
    formData.append("whatsappNumber", data.whatsappNumber);
    formData.append("referralStudentId", data.referralStudentId);
    formData.append("emergencyContactName", data.emergencyContactName);
    formData.append("emergencyContactNumber", data.emergencyContactNumber);
    formData.append("emergencyContactLocation", data.emergencyContactLocation);
    formData.append("amount", data.amount);
    console.log(formData);
    try {
      const res = await studentsService.addAStudent(formData);
      if (res.status === 201) {
        toast.success("File upload success");
        document.documentElement.scrollTop = 0;
      }
    } catch (error) {
      handleAuthError(error);
    }
  };

  return (
    <div className="mt-4 mt-md-5">
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
          className={`mt-1 ${styles.h1}`}
        />
      </Stack>
      <div className="p-3 p-md-4">
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
            <Col md={4} className="mt-3 mt-md-0">
              <FormInputs
                register={register}
                errors={errors?.pka}
                registerOptions={registerOptions?.pka}
                className="my-1 text-black"
                id="pka"
                label="Popularly Known As"
                name="pka"
                type="text"
                placeholder="Enter name"
              />
            </Col>
            <Col md={4} className="mt-3 mt-md-0">
              <FormInputs
                register={register}
                className="my-1 text-black"
                id="studentId"
                label="Student ID"
                name="studentId"
                type="text"
                placeholder="Student ID"
                disabled
              />
            </Col>
            <Col md={4} className="mt-3 mt-md-4">
              <FormSelect
                register={register}
                errors={errors?.classType}
                registerOptions={registerOptions?.classType}
                className="my-1 text-black"
                id="courseCohort"
                label="Course Cohort"
                name="courseCohort"
                data={classCohortValues}
              />
            </Col>
            <Col md={4} className="mt-3 mt-md-4">
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
            <Col md={4} className="mt-3 mt-md-4">
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
            <Col md={4} className="mt-3 mt-md-4">
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
                errors={errors?.whatsappNumber}
                registerOptions={registerOptions?.whatsappNumber}
                className="my-1 text-black"
                id="whatsappNumber"
                label="WhatsApp Number"
                name="whatsappNumber"
                type="text"
                placeholder="Enter your whatsapp number"
              />
            </Col>
            <Col md={4} className="mt-3 mt-md-0">
              <FormInputs
                register={register}
                className="my-1 text-black"
                id="referralStudentId"
                label="Referral’s Student ID"
                name="referralStudentId"
                type="text"
                placeholder="Enter Student ID"
              />
            </Col>
            <Col md={4} className="mt-3 mt-md-0">
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
            <Col md={6} lg={4} className="mt-3 mt-md-4">
              <FormInputs
                register={register}
                className="my-1 text-black"
                id="emergencyContactName"
                label="Emergency Contact’s Name"
                name="emergencyContactName"
                type="text"
                placeholder="Enter your next of kin"
              />
            </Col>
            <Col md={6} lg={4} className="mt-3 mt-md-4">
              <FormInputs
                register={register}
                className="my-1 text-black"
                id="emergencyContactNumber"
                label="Emergency Contact’s Number"
                name="emergencyContactNumber"
                type="text"
                placeholder="Enter your next of kin’s contact"
              />
            </Col>
            <Col md={6} lg={4} className="mt-3 mt-md-4">
              <FormInputs
                register={register}
                className="my-1 text-black"
                id="emergencyContactLocation"
                label="Emergency Contact’s Location"
                name="emergencyContactLocation"
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
                errors={errors?.amount}
                registerOptions={registerOptions?.amount}
                className="my-1 text-black"
                id="amount"
                label="Deposit Paid Upon Enrolment"
                name="amount"
                type="number"
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
                    className="fw-medium border border-start-0"
                  />
                </div>
                <Form.Control
                  {...register("receipt", { required: true })}
                  type="file"
                  className="w-100 h-75 position-absolute bottom-0 end-0 opacity-0"
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
                      {preview.slice(0, preview.length / 2) + preview.slice(-5)}
                    </span>
                  </>
                )}
              </div>
            </Col>
            <Col md={6} lg={4} className="mt-3 mt-md-0">
              <div className="position-relative">
                <Form.Label className="mt-2 mt-md-1">
                  Upload Profile Photo
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
                    className="fw-medium border border-start-0"
                  />
                </div>
                <Form.Control
                  {...register("image", { required: true })}
                  type="file"
                  className="w-100 h-75 position-absolute bottom-0 end-0 opacity-0"
                  accept="image/*"
                  name="image"
                  id="image"
                  label="image"
                  onChange={handleImageChange}
                />
                {errors?.image?.type === "required" && !preview1 ? (
                  <span className="small text-danger">
                    This field is required!
                  </span>
                ) : null}
                {preview1 && (
                  <>
                    <span className="small">
                      {preview1.slice(0, preview1.length / 2) +
                        preview1.slice(-5)}
                    </span>
                  </>
                )}
              </div>
            </Col>
          </Row>
          <hr className="my-5" />
          <div className="d-flex flex-column flex-md-row gap-3 gap-md-4 justify-content-center justify-content-md-start ">
            <MyButton
              variant="primary"
              text={
                isSubmitting ? <BeatLoader color="#ffffff" /> : "Save Changes"
              }
              className={`${styles.btnSize} fw-bold`}
              type="submit"
              disabled={isSubmitting}
            />
            <MyButton
              variant="outline-danger"
              text="Cancel"
              className={`${styles.btnSize} fw-bold`}
              onClick={() => navigate(-1)}
            />
          </div>
        </Form>
      </div>
    </div>
  );
}
