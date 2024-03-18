import { useEffect } from "react";
import { useTitle } from "@hooks";
import { useParams, useNavigate } from "react-router-dom";
import { useFetchData } from "@store";
import { MdArrowLeft } from "react-icons/md";
import { Headings, FormInputs, FormSelect, MyButton } from "@components";
import { Stack, Row, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { registerOptions, classTypeValues, classCohortValues } from "@utils";
import styles from "./student.module.css";

export default function EditProfile() {
  const { studentId } = useParams();
  useTitle(`Edit Profile ${studentId}`);
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const fetchData = useFetchData((state) => state.fetchAndSetData);
  const data = useFetchData((state) => state.data);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const student = data.filter((item) => item.id == studentId);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="mt-4 mt-md-5">
      {student.map((item) => (
        <div key={item.id}>
          <Stack
            direction="horizontal"
            className="mb-2 mb-lg-0 align-items-start"
          >
            <MdArrowLeft
              size="30px"
              className="cursor"
              color="#1f2666"
              onClick={() => navigate("/dashboard/students")}
            />
            <div>
              <Headings
                title="Edit Student Profile"
                color="var(--mainBlue)"
                className={`mt-1 ${styles.h1}`}
              />
              <p className={styles.pStyle}>{item.title}</p>
            </div>
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
                    placeholder={item.title}
                  />
                </Col>
                <Col md={4} className="mt-3 mt-md-0">
                  <FormInputs
                    register={register}
                    errors={errors?.popularlyKnownAs}
                    registerOptions={registerOptions?.popularlyKnownAs}
                    className="my-1 text-black"
                    id="popularlyKnownAs"
                    label="Popularly Known As"
                    name="popularlyKnownAs"
                    type="text"
                    placeholder={item.pka}
                  />
                </Col>
                <Col md={4} className="mt-3 mt-md-0">
                  <FormInputs
                    register={register}
                    className="my-1 text-black"
                    id="studentId"
                    label="Student ID"
                    name="Student ID"
                    type="text"
                    placeholder={item.id}
                    disabled
                  />
                </Col>
                <Col md={4} className="mt-3 mt-md-4">
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
                    placeholder={item.email}
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
                    placeholder={item.phone}
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
                    errors={errors?.whatsAppNumber}
                    registerOptions={registerOptions?.whatsAppNumber}
                    className="my-1 text-black"
                    id="whatsAppNumber"
                    label="WhatsApp Number"
                    name="whatsAppNumber"
                    type="text"
                    placeholder={item.whatsApp}
                  />
                </Col>
                <Col md={4} className="mt-3 mt-md-0">
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
                <Col md={4} className="mt-3 mt-md-4">
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
                <Col md={4} className="mt-3 mt-md-4">
                  <FormInputs
                    register={register}
                    className="my-1 text-black"
                    id="iceContactNumber"
                    label="ICE Contact’s Number"
                    name="iceContactNumber"
                    type="text"
                    placeholder="Enter your next of kin’s contact"
                  />
                </Col>
                <Col md={4} className="mt-3 mt-md-4">
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
      ))}
    </div>
  );
}
