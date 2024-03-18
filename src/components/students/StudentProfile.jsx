import { useState } from "react";
import { MyModal, MyButton, ConfirmDeposit, Headings } from "@components";
import { MdArrowLeft } from "react-icons/md";
import { Image, Stack, Form, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";
import { formatCurrency } from "@utils";
import { receipt, divider2 } from "@assets";
import styles from "./student.module.css";

export default function StudentProfile({
  setShowPicModal,
  showPicModal,
  current,
  data,
}) {
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => setShowPicModal(false);

  const pStyle = {
    fontWeight: "600",
    color: "var(--offBlack)",
    fontSize: "0.884rem",
  };

  return (
    <>
      <MyModal
        show={showPicModal}
        handleClose={handleClose}
        backdrop="static"
        title="STUDENT PROFILE"
        backIcon={
          <MdArrowLeft
            size="40px"
            onClick={handleClose}
            className="cursor"
            color="#1f2666"
          />
        }
        Menu={
          <Dropdown title="Dropdown items">
            <Dropdown.Toggle
              variant="none"
              id="dropdown-basic"
              className={styles.d}
            >
              <CiMenuKebab size="25px" className="cursor" color="#1f2666" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {data.map((item, i) => (
                <>
                  {i === current && (
                    <Dropdown.Item
                      as={Link}
                      to={`/dashboard/students/edit-profile/${item.id}`}
                      key={item.id}
                    >
                      Edit Profile
                    </Dropdown.Item>
                  )}
                </>
              ))}
              <Dropdown.Item>Generate Docket</Dropdown.Item>
              <Dropdown.Item>View Payment History</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        }
      >
        {data.map((item, i) => (
          <div key={item.id}>
            {i === current && (
              <>
                <div className="d-lg-flex align-items-center gap-3 text-center text-lg-start">
                  <div
                    style={{ height: "300px", width: "190px" }}
                    className="mb-3 mb-lg-0 mx-auto"
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
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
                        {item.title}
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
                          24030105WD
                        </p>
                      </div>
                    </div>
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
                    <div className="d-flex justify-content-between w-100">
                      <div>
                        <p style={pStyle} className="small mb-0">
                          Phone Number
                        </p>
                        <p
                          style={{ color: "var(--mainBlue)" }}
                          className="fw-bold"
                        >
                          {item.phone}
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
                        {item.whatsApp}
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
                        Emmanuella Anyanwu
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
                        Charles Baby
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
                        08130034213
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
                        Palmgrove
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
                  <div className="d-flex flex-wrap justify-content-center gap-2 w-100 my-3 text-center">
                    <div>
                      <p style={pStyle} className="small mb-1">
                        Deposit Paid Upon Enrollment
                      </p>
                      <h1
                        style={{ color: "var(--mainRed)", fontSize: "1.75rem" }}
                      >
                        {formatCurrency(100000)}
                      </h1>
                    </div>
                    <div>
                      <p style={pStyle} className="small mb-1">
                        Payment Receipt
                      </p>

                      <Image src={receipt} style={{ width: "200px" }} />
                    </div>
                  </div>
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
                    <Form.Select className="mb-4 text-secondary">
                      <option>Select Discount</option>
                      <option>5% Discount</option>
                      <option>10% Discount</option>
                      <option>15% Discount</option>
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
              </>
            )}
          </div>
        ))}
      </MyModal>
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
