import { Navbar, Footer } from "@layouts";
import { useTitle } from "@hooks";
import { Container, Form, Image } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { browseFileImg } from "@assets";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const validationSchema = yup
  .object({
    fullname: yup.string().required("missing info"),
    popularlyKnownAs: yup.string().required("missing info"),
    studentId: yup.string().required("missing info"),
    classCohort: yup.string().required("missing info"),
    email: yup.string().required("missing email").email("Invalid email format"),
    phoneNumber: yup.string().required("missing phone number"),
    classType: yup.string().required("missing info"),
    uploadReceipt: yup.string().required("missing info"),
    whatsappNumber: yup.string().required("missing info"),
    referralStudentId: yup.string().required("missing info"),
    referralName: yup.string().required("missing info"),
    emergencyContactName: yup.string().required("missing info"),
    emergencyContactNumber: yup.string().required("missing info"),
    emergencyContactLocation: yup.string().required("missing info"),
    paymentDetails: yup.string().required("missing info"),
    paymentReceipt: yup.string().required("missing info"),
  })
  .required();
const Auth = () => {
  useTitle("Welcome to Techstudio");
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      fullname: "",
      popularlyKnownAs: "",
      studentId: "",
      classCohort: "",
      email: "",
      phoneNumber: "",
      classType: "",
      uploadReceipt: "",
      whatsappNumber: "",
      referralStudentId: "",
      referralName: "",
      emergencyContactName: "",
      emergencyContactNumber: "",
      emergencyContactLocation: "",
      paymentDetails: "",
      paymentReceipt: "",
    },
  });
  console.log("errors", errors);
  const onSubmit = async (data) => {
    
    // axios.post("https://tsa-database-server.onrender.com/api/v1/student", {
    //     student: data,
    //   })
    //   .then((res) => console.log("succ", res))
    //   .catch((err) => {
    //     console.log("err", err);
    //   });
    //   console.log("data", data);
  };

  return (
    <>
      <Navbar />
      <Container className="mt-5 p-3">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="row justify-content-between">
            <h2 className="my-5">Student&apos;s Details</h2>
            {/* fullname */}
            <Form.Group
              className="mb-5 col-sm-12 col-md-5"
              controlId="formBasicEmail"
            >
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                {...register("fullname")}
              />
              {errors.fullname && (
                <span className="text-danger">
                  {errors.fullname.message}
                </span>
              )}
            </Form.Group>
            {/* popularly known as */}
            <Form.Group
              className="mb-5 col-sm-12 col-md-5"
              controlId="formBasicEmail"
            >
              <Form.Label>Popularly Known As</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                {...register("popularlyKnownAs")}
              />
              {errors.popularlyKnownAs && (
                <span className="text-danger">
                  {" "}
                  {errors.popularlyKnownAs.message}{" "}
                </span>
              )}
            </Form.Group>
            {/* student id */}
            <Form.Group
              className="mb-5 col-sm-12 col-md-5"
              controlId="formBasicEmail"
            >
              <Form.Label>Student ID</Form.Label>
              <Form.Control
                placeholder="Student ID"
                type="number"
                disabled
                {...register("studentId")}
              />
              
            </Form.Group>
            {/* course cohort*/}
            <Form.Group
              className="mb-5 col-sm-12 col-md-5"
              controlId="formBasicEmail"
            >
              <Form.Label>Course-Cohort</Form.Label>

              <Form.Select
                aria-label="Default select example"
                {...register("classCohort")}
              >
                <option>Select cohort </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              {errors.studentId && (
                <span className="text-danger">
                  {" "}
                  {errors.classCohort.message}{" "}
                </span>
              )}
            </Form.Group>
            {/* Email Address */}
            <Form.Group
              className="mb-5 col-sm-12 col-md-5"
              controlId="formBasicEmail"
            >
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                {...register("email")}
              />
                {errors.studentId && (
                <span className="text-danger">
                  {" "}
                  {errors.email.message}{" "}
                </span>
              )}
            </Form.Group>
            {/* Phone number*/}
            <Form.Group
              className="mb-5 col-sm-12 col-md-5"
              controlId="formBasicEmail"
            >
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                {...register("phoneNumber")}
              />
              {errors.studentId && (
                <span className="text-danger">
                  {" "}
                  {errors.phoneNumber.message}{" "}
                </span>
              )}
            </Form.Group>
            {/* Class Type */}
            <Form.Group
              className="mb-5 col-sm-12 col-md-5"
              controlId="formBasicEmail"
            >
              <Form.Label>Class Type</Form.Label>

              <Form.Select
                aria-label="Default select example"
                {...register("classType")}
              >
                <option>Select Class Type</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
            {/* img upload */}
            <Form.Group
              controlId="formFileLg"
              className="mb-5 col-sm-12 col-md-5 position-relative"
            >
              <Form.Label>Upload profile picture</Form.Label>
              {/* <Form.Control type="file" size="lg" placeholder="hh" /> */}
              <Image src={browseFileImg} className="img-fluid" />

              {/* below for bootstrap */}
              <Form.Control
                type="file"
                className="position-absolute top-50 opacity-0"
                size="lg"
                placeholder="hh"
                {...register("uploadReceipt")}
              />
            </Form.Group>
            <hr />
            {/* Other Details */}
            <h2 className="my-5">Other Details</h2>
            {/* WhatsApp Number*/}
            <Form.Group
              className="mb-5 col-sm-12 col-md-5"
              controlId="formBasicEmail"
            >
              <Form.Label>WhatsApp Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your whatsapp number"
                {...register("whatsappNumber")}
              />
            </Form.Group>
            {/* Referral Student ID */}
            <Form.Group
              className="mb-5 col-sm-12 col-md-5"
              controlId="formBasicEmail"
            >
              <Form.Label>Referral&apos;s Student ID</Form.Label>
              <Form.Control
                placeholder="Enter your referral student ID"
                type="number"
                {...register("referralStudentId")}
              />
            </Form.Group>
            {/* Referrals Name */}
            <Form.Group
              className="mb-5 col-sm-12 col-md-5"
              controlId="formBasicEmail"
            >
              <Form.Label>Referral&apos;s Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Referral's Name"
                disabled
                {...register("referralName")}
              />
            </Form.Group>
            {/* Emergency Contact's Name */}
            <Form.Group
              className="mb-5 col-sm-12 col-md-5"
              controlId="formBasicEmail"
            >
              <Form.Label>Emergency Contact&apos;s Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter ICE  contact's name"
                {...register("emergencyContactName")}
              />
            </Form.Group>
            {/* Emergency Contact's Number*/}
            <Form.Group
              className="mb-5 col-sm-12 col-md-5"
              controlId="formBasicEmail"
            >
              <Form.Label>Emergency Contact&apos;s Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter ICE  contact's number"
                {...register("emergencyContactNumber")}
              />
            </Form.Group>
            {/* Emergency Contact's Location */}
            <Form.Group
              className="mb-5 col-sm-12 col-md-5"
              controlId="formBasicEmail"
            >
              <Form.Label>Emergency Contact&apos;s Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter ICE  contact's location"
                {...register("emergencyContactLocation")}
              />
            </Form.Group>
            <hr />
            {/* Payment Details */}
            <h2 className="my-5">Payment Details</h2>
            {/* Deposit paid upon enrolment */}
            <Form.Group
              className="mb-5 col-sm-12 col-md-5"
              controlId="formBasicEmail"
            >
              <Form.Label>Deposit Paid Upon Enrolment</Form.Label>
              <Form.Control
                placeholder="0.00"
                type="number"
                {...register("paymentDetails")}
              />
            </Form.Group>
            {/* payment receipt */}
            <Form.Group
              controlId="formFileLg"
              className="mb-5 col-sm-12 col-md-5 position-relative "
            >
              <Form.Label>Payment Receipt</Form.Label>
              {/* <Form.Control type="file" size="lg" placeholder="hh" /> */}
              <Image src={browseFileImg} className="img-fluid" />

              {/* below for bootstrap */}
              <Form.Control
                type="file"
                className="position-absolute top-50 opacity-0"
                size="lg"
                placeholder="hh"
                {...register("paymentReceipt")}
              />
            </Form.Group>
            <hr />
            {/* <section className="row  justify-content-between  my-5">
              <div className="col-sm-12 col-md-5">
                <button className="btn btn-payment btn-primary">Upload</button>
              </div>
              <div className="col-md-5">
                <button className="btn btn-payment btn-outline-danger">CANCEL</button>
              </div>
            </section> */}
            <section className="my-4 container row gap-2 mx-auto">
              <div className="col-sm-12 col-md-3">
                <button className="btn btn-primary w-100">Upload</button>
              </div>
              <div className="col-sm-12 col-md-3">
                <button className="btn btn-outline-danger w-100">CANCEL</button>
              </div>
            </section>
          </div>
        </Form>
      </Container>
      <Footer />
    </>
  );
};

export default Auth;
