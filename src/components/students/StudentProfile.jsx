import { useState } from "react";
import { MyModal, MyButton, ConfirmDeposit, Headings } from "@components";
import { MdArrowLeft } from "react-icons/md";
import { Image, Stack, Form, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";
import { formatCurrency } from "@utils";
import { divider2 } from "@assets";
import styles from "./student.module.css";

export default function StudentProfile({
  setShowStudentModal,
  showStudentModal,
  current,
  data,
}) {
  const [openModal, setOpenModal] = useState(false);
  const [discount, setDiscount] = useState(0);
  const handleClose = () => setShowStudentModal(false);

  console.log(discount);

  const pStyle = {
    fontWeight: "600",
    color: "var(--offBlack)",
    fontSize: "0.884rem",
  };

  // paymentVerification: 'vrirfied'

  return (
    <>
      <div>
        {data.map((item, i) => (
          <div key={item._id}>
            {i === current && (
              <MyModal
                show={showStudentModal}
                handleClose={handleClose}
                backdrop="static"
                title="STUDENT PROFILE"
                size={"lg"}
                backIcon={
                  <MdArrowLeft
                    size="40px"
                    onClick={handleClose}
                    className="cursor"
                    color="#1f2666"
                  />
                }
                menu={
                  <Dropdown title="Dropdown items">
                    <Dropdown.Toggle
                      variant="none"
                      id="dropdown-basic"
                      className={styles.d}
                    >
                      <CiMenuKebab
                        size="25px"
                        className="cursor"
                        color="#1f2666"
                      />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <>
                        <Dropdown.Item
                          as={Link}
                          to={`/dashboard/students/edit-profile/${item._id}`}
                        >
                          Edit Profile
                        </Dropdown.Item>
                      </>

                      <Dropdown.Item
                        as={Link}
                        to={`/dashboard/students/generate-docket/${item._id}`}
                      >
                        Generate Docket
                      </Dropdown.Item>
                      <Dropdown.Item>View Payment History</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                }
              >
                <div>
                  <div className="d-lg-flex align-items-start gap-3 text-center text-lg-start">
                    <div
                      className={`mb-3 mb-lg-0 mx-auto ${styles.studentProfileImg}`}
                    >
                      <Image
                        src={item.image}
                        alt={item.fullName}
                        fluid
                        className="rounded-4 object-fit-cover w-100 h-100"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <div>
                        <p style={pStyle} className="small mb-0">
                          Full Name
                        </p>
                        <p
                          style={{ color: "var(--mainBlue)" }}
                          className="fw-bold"
                        >
                          {item.fullName}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between w-100">
                        <div>
                          <p style={pStyle} className="small mb-0">
                            Popularly Known As
                          </p>
                          <p
                            style={{ color: "var(--mainBlue)" }}
                            className="fw-bold"
                          >
                            {item.pka}
                          </p>
                        </div>
                        <div>
                          <p style={pStyle} className="small mb-0">
                            Student ID
                          </p>
                          <p
                            style={{ color: "var(--mainBlue)" }}
                            className="fw-bold"
                          >
                            {item.studentId}
                          </p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between w-100">
                        <div>
                          <p style={pStyle} className="small mb-0">
                            Course-Cohort
                          </p>
                          <p
                            style={{ color: "var(--mainBlue)" }}
                            className="fw-bold"
                          >
                            {item.courseCohort}
                          </p>
                        </div>
                        <div>
                          <p style={pStyle} className="small mb-0">
                            Email Address
                          </p>
                          <p
                            style={{ color: "var(--mainBlue)" }}
                            className="fw-bold"
                          >
                            {item.email}
                          </p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between w-100">
                        <div>
                          <p style={pStyle} className="small mb-0">
                            Phone Number
                          </p>
                          <p
                            style={{ color: "var(--mainBlue)" }}
                            className="fw-bold"
                          >
                            {item.phoneNumber}
                          </p>
                        </div>
                        <div>
                          <p style={pStyle} className="small mb-0">
                            Class Type
                          </p>
                          <p
                            style={{ color: "var(--mainBlue)" }}
                            className="fw-bold"
                          >
                            {item.classType}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <Stack
                      direction="horizontal"
                      className="justify-content-center my-4 position-relative"
                    >
                      <Image
                        src={divider2}
                        className="position-absolute top-50 start-50 translate-middle"
                      />
                      <Headings
                        title="Other Details"
                        color="var(--mainBlue)"
                        size="1.25rem"
                        className="position-absolute top-50 start-50 translate-middle"
                      />
                    </Stack>
                    <div className="d-flex flex-wrap justify-content-between gap-2 w-100">
                      <div>
                        <p style={pStyle} className="small mb-0">
                          WhatsApp
                        </p>
                        <p
                          style={{ color: "var(--mainBlue)" }}
                          className="fw-bold"
                        >
                          {item.whatsappNumber}
                        </p>
                      </div>
                      <div>
                        <p style={pStyle} className="small mb-0">
                          Referral’s Name
                        </p>
                        <p
                          style={{ color: "var(--mainBlue)" }}
                          className="fw-bold"
                        >
                          {item.referralStudentName
                            ? item.referralStudentName
                            : "none"}
                        </p>
                      </div>
                      <div>
                        <p style={pStyle} className="small mb-0">
                          Referral’s Student ID
                        </p>
                        <p
                          style={{ color: "var(--mainBlue)" }}
                          className="fw-bold"
                        >
                          23020215WE
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between gap-2 w-100 my-3">
                      <div>
                        <p style={pStyle} className="small mb-0">
                          Emergency Name
                        </p>
                        <p
                          style={{ color: "var(--mainBlue)" }}
                          className="fw-bold"
                        >
                          {item.emergencyContactName}
                        </p>
                      </div>
                      <div>
                        <p style={pStyle} className="small mb-0">
                          Emergency Number
                        </p>
                        <p
                          style={{ color: "var(--mainBlue)" }}
                          className="fw-bold"
                        >
                          {item.emergencyContactNumber}
                        </p>
                      </div>
                      <div>
                        <p style={pStyle} className="small mb-0">
                          Emergency Location
                        </p>
                        <p
                          style={{ color: "var(--mainBlue)" }}
                          className="fw-bold"
                        >
                          {item.emergencyContactLocation}
                        </p>
                      </div>
                    </div>
                    <Stack
                      direction="horizontal"
                      className="justify-content-center my-4 position-relative"
                    >
                      <Image
                        src={divider2}
                        className="position-absolute top-50 start-50 translate-middle"
                      />
                      <Headings
                        title="Payment Details"
                        color="var(--mainBlue)"
                        size="1.25rem"
                        className="position-absolute top-50 start-50 translate-middle"
                      />
                    </Stack>
                    {item.payments.map((info) => (
                      <div
                        key={info._id}
                        className="d-flex flex-wrap justify-content-around align-items-center gap-2 w-100 my-3 text-center"
                      >
                        <div>
                          <p style={pStyle} className="small mb-1">
                            Deposit Paid Upon Enrollment
                          </p>
                          <h1
                            style={{
                              color: "var(--mainRed)",
                              fontSize: "1.75rem",
                            }}
                          >
                            {formatCurrency(info.amount)}
                          </h1>
                        </div>
                        <div>
                          <p style={pStyle} className="small mb-1">
                            Payment Receipt
                          </p>
                          <Image
                            src={info.receipt}
                            style={{ height: "40px", width: "40px" }}
                          />
                        </div>
                      </div>
                    ))}

                    <Form.Group>
                      <Form.Label
                        style={{
                          color: "var(--deepBlack)",
                          fontWeight: "600",
                          fontSize: "1.2rem",
                        }}
                      >
                        Discount
                      </Form.Label>
                      <Form.Select
                        className="mb-4 text-secondary"
                        onChange={(e) => setDiscount(e.target.value)}
                      >
                        <option value={0}>Select Discount</option>
                        <option value={5}>5% Discount</option>
                        <option value={10}>10% Discount</option>
                        <option value={15}>15% Discount</option>
                      </Form.Select>
                    </Form.Group>
                    <div className="text-center my-2">
                      <MyButton
                        variant="primary"
                        text="Confirm Deposit Payment"
                        className="fw-bold"
                        onClick={() => setOpenModal(true)}
                      />
                    </div>
                  </div>
                </div>
              </MyModal>
            )}
          </div>
        ))}
      </div>
      {openModal && (
        <ConfirmDeposit
          setOpenModal={setOpenModal}
          openModal={openModal}
          data={data}
          current={current}
        />
      )}
    </>
  );
}
