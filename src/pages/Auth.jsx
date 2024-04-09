import axios from "axios";
import { useState } from "react";
import { Navbar, Footer } from "@layouts";
import { useTitle } from "@hooks";
import { Container, Form, Image } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { browseFileImg } from "@assets";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema, SuccessModal } from "@utils";
// import SuccessModal from "@utils/SuccessModal";
import Spinner from "react-bootstrap/Spinner";

const Auth = () => {
  const [show, setShow] = useState(false);
  const [reveal, setReveal] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useTitle("Welcome to Techstudio");
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      fullName: "",
      pka: "",
      // studentId: "",
      courseCohort: "",
      email: "",
      phoneNumber: "",
      classType: "",
      image: "",
      whatsappNumber: "",
      referralStudentId: "",
      // referralName: "",
      emergencyContactName: "",
      emergencyContactNumber: "",
      emergencyContactLocation: "",
      amount: "",
      receipt: "",
    },
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedReceipt, setSelectedReceipt] = useState(null);
  console.log("errors", errors);

  const onSubmit = async (data) => {
    setIsClicked(true);

    try {
      const formData = new FormData();
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
      formData.append(
        "emergencyContactLocation",
        data.emergencyContactLocation
      );
      formData.append("amount", data.amount);
      if (selectedImage) {
        formData.append("image", selectedImage);
      }
      if (selectedReceipt) {
        formData.append("receipt", selectedReceipt);
      }

      const response = await axios.post(
        "https://tsa-database-server.onrender.com/api/v1/student",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Response:", response.data);
      if (response.data.success) {
        // setShow(true);
        setReveal(true);
        setIsClicked(true);
        document.documentElement.scrollTop = 0;
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsClicked(false);
    }
  };
  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleReceiptChange = (event) => {
    setSelectedReceipt(event.target.files[0]);
  };
  if (show) {
    return <SuccessModal />;
  }
  const btnContent = isClicked ? <Spinner animation="border" /> : "Upload";

  return (
    <>
      <main className="position-relative">
        <Navbar />
        {reveal && (
          <section
            className=" text-center bg-white shadow  mx-auto position-absolute top-0 end-0 mt-3 rounded-top"
            style={{ minHeight: "14rem", maxWidth:"24rem" }}
          >
            <p
              className="text-end me-3 mt-2"
              role="button"
              onClick={() => setReveal(false)}
            >
              close
            </p>
            <div className="mt-3 p-5">
              <h2 className="text-primary">Details Uploaded Successfully!!!</h2>
              <p className="fw-bold">
                Your details have been successfully uploaded to the Tech Studio
                Academy’s database.
              </p>
            </div>
          </section>
        )}

        <Container className="mt-5 p-3">
          <Form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
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
                  {...register("fullName")}
                />
                {errors.fullName && errors.fullName.message && (
                  <span className="text-danger">{errors.fullName.message}</span>
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
                  {...register("pka")}
                />
                {errors.pka && errors.pka.message && (
                  <span className="text-danger"> {errors.pka.message} </span>
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
                  {...register("courseCohort")}
                >
                  {/* <option>Select cohort </option> */}
                  <option value="Fullstack">Fullstack</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Frontend">Frontend</option>
                  <option value="Data Analysis">Data Analysis</option>
                  <option value="Product Design">Product Design</option>
                </Form.Select>
                {errors.classCohort && errors.classCohort.message && (
                  <span className="text-danger">
                    {errors.classCohort.message}
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
                {errors.email && errors.email.message && (
                  <span className="text-danger"> {errors.email.message} </span>
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
                {errors.phoneNumber && errors.phoneNumber.message && (
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
                  {/* <option>Select Class Type</option> */}
                  <option value="weekday">weekday</option>
                  <option value="weekend">weekend</option>
                  <option value="weekend">online</option>
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
                  accept="image/*"
                  type="file"
                  className="position-absolute top-50 opacity-0"
                  size="lg"
                  placeholder="hh"
                  {...register("image")}
                  onChange={handleImageChange}
                />
                {errors.image && errors.image.message && (
                  <span className="text-danger">{errors.image.message}</span>
                )}
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
                  {...register("amount")}
                />
                {errors.amount && errors.amount.message && (
                  <span className="text-danger"> {errors.amount.message} </span>
                )}
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
                  accept="image/*"
                  type="file"
                  className="position-absolute top-50 opacity-0"
                  size="lg"
                  placeholder="hh"
                  {...register("receipt")}
                  onChange={handleReceiptChange}
                />
                {errors.receipt && errors.receipt.message && (
                  <span className="text-danger">
                    {" "}
                    {errors.receipt.message}{" "}
                  </span>
                )}
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
                  <button
                    className="btn btn-primary w-100"
                    type="submit"
                    disabled={isClicked}
                  >
                    {btnContent}
                  </button>
                </div>
                <div className="col-sm-12 col-md-3">
                  <button
                    className="btn btn-outline-danger w-100"
                    onClick={() => reset()}
                  >
                    CANCEL
                  </button>
                </div>
              </section>
            </div>
          </Form>
        </Container>
        <Footer />
      </main>
    </>
  );
};

export default Auth;
