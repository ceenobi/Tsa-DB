import { Navbar, Footer } from "@layouts";
import { useTitle } from "@hooks";
import { Container, Form } from "react-bootstrap";

const Auth = () => {
  useTitle("Welcome to Techstudio");

  return (
    <>
      <Navbar />
      <Container className="mt-5 p-3">
        <Form>
          <div className="row justify-content-between">
            <h2 className="my-5">Student&apos;s Details</h2>
            {/* fullname */}
            <Form.Group
              className="mb-5 col-sm-12 col-md-5"
              controlId="formBasicEmail"
            >
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your full name" />
            </Form.Group>
            {/* popularly known as */}
            <Form.Group
              className="mb-5 col-sm-12 col-md-5"
              controlId="formBasicEmail"
            >
              <Form.Label>Popularly Known As</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            {/* student id */}
            <Form.Group
              className="mb-5 col-sm-12 col-md-5"
              controlId="formBasicEmail"
            >
              <Form.Label>Student ID</Form.Label>
              <Form.Control placeholder="Student ID" type="number" disabled />
            </Form.Group>
            {/* course cohort*/}
            <Form.Group
              className="mb-5 col-sm-12 col-md-5"
              controlId="formBasicEmail"
            >
              <Form.Label>Course-Cohort</Form.Label>

              <Form.Select aria-label="Default select example">
                <option>Select cohort </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
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
              />
            </Form.Group>
            {/* Phone number*/}
            <Form.Group
              className="mb-5 col-sm-12 col-md-5"
              controlId="formBasicEmail"
            >
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter your phone number" />
            </Form.Group>
            {/* Class Type */}
            <Form.Group
              className="mb-5 col-sm-12 col-md-5"
              controlId="formBasicEmail"
            >
              <Form.Label>Class Type</Form.Label>

              <Form.Select aria-label="Default select example">
                <option>Select Class Type</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
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
              <Form.Control placeholder="0.00" type="number" />
            </Form.Group>
            {/* payment receipt */}
            <Form.Group
              controlId="formFileLg"
              className="mb-5 col-sm-12 col-md-5 "
            >
              <Form.Label>Payment Receipt</Form.Label>
              <Form.Control type="file" size="lg" placeholder="hh" />
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
