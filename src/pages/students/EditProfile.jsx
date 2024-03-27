import { useEffect } from "react";
import { useTitle } from "@hooks";
import { useParams, useNavigate } from "react-router-dom";
import { MdArrowLeft } from "react-icons/md";
import { Headings, FormInputs, FormSelect, MyButton } from "@components";
import { Stack, Row, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { registerOptions, classTypeValues, classCohortValues } from "@utils";
import { useQuery } from "@tanstack/react-query";
import { useGetAStudentData } from "@store";
import { studentsService } from "@services";
import { Spinner } from "@utils";
// import { handleAuthError } from "@config";
import styles from "./student.module.css";

export default function EditProfile() {
  const { studentId } = useParams();
  const navigate = useNavigate();
  const { student, setStudent } = useGetAStudentData();
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["studentProfile", studentId],
    queryFn: () => studentsService.getAStudent(studentId),
    onError: (error) => {
      console.error("Error fetching student data:", error);
    },
    onLoading: () => {
      <Spinner />;
    },
  });

  useEffect(() => {
    if (data) {
      setStudent(data?.data.student);
    }
  }, [data, setStudent]);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: student.fullName,
      email: student.email,
      pka: student.pka,
      studentId: student.studentId,
      classCohort: student.classCohort,
      phoneNumber: student.phoneNumber,
      classType: student.classType,
      whatsappNumber: student.whatsappNumber,
      emergencyContactName: student.emergencyContactName,
      emergencyContactNumber: student.emergencyContactNumber,
      emergencyContactLocation: student.emergencyContactLocation,
    },
  });

  useTitle(`Edit Profile "${student.fullName}"`);

  console.log(student);

  const onSubmitHandler = async (data) => {
    console.log(data);
    // try {
    //   const res = await studentsService.updateAStudent()
    // } catch (error) {
    //   handleAuthError(error);
    // }
  };

  return (
    <div className="mt-4 mt-md-5">
      {isError && (
        <span className="text-danger">
          {error.message ? error.message : error}
        </span>
      )}
      {isLoading && <Spinner />}
      {!isLoading && !isError && !student && (
        <span className="text-red-400"> h
          You have no student data to display
        </span>
      )}
      <div>
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
            <p className={styles.pStyle}>{student.fullName}</p>
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
                  placeholder={student.fullName}
                />
              </Col>
              <Col md={4} className="mt-3 mt-md-0">
                <FormInputs
                  register={register}
                  errors={errors?.popularlyKnownAs}
                  registerOptions={registerOptions?.pka}
                  className="my-1 text-black"
                  id="pka"
                  label="Popularly Known As"
                  name="pka"
                  type="text"
                  placeholder={student.pka}
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
                  placeholder={student.studentId}
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
                  placeholder={student.email}
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
                  placeholder={student.phoneNumber}
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
                  placeholder={student.whatsappNumber}
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
                  placeholder={
                    student.referralStudentName
                      ? student.referralStudentName
                      : "None"
                  }
                  disabled
                />
              </Col>
              <Col md={4} className="mt-3 mt-md-4">
                <FormInputs
                  register={register}
                  className="my-1 text-black"
                  id="emergencyContactName"
                  label="ICE Contact’s Name"
                  name="emergencyContactName"
                  type="text"
                  placeholder={student.emergencyContactName}
                />
              </Col>
              <Col md={4} className="mt-3 mt-md-4">
                <FormInputs
                  register={register}
                  className="my-1 text-black"
                  id="emergencyContactNumber"
                  label="ICE Contact’s Number"
                  name="emergencyContactNumber"
                  type="text"
                  placeholder={student.emergencyContactNumber}
                />
              </Col>
              <Col md={4} className="mt-3 mt-md-4">
                <FormInputs
                  register={register}
                  className="my-1 text-black"
                  id="emergencyContactLocation"
                  label="ICE Contact’s Location"
                  name="emergencyContactLocation"
                  type="text"
                  placeholder={student.emergencyContactLocation}
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
                onClick={() => reset()}
              />
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
