import { useState } from "react";
import PropTypes from "prop-types";
import { MyModal, MyButton, ConfirmDeposit } from "@components";
import { MdArrowLeft } from "react-icons/md";
import { Dropdown, Image, Stack, Form } from "react-bootstrap";
import { CiMenuKebab } from "react-icons/ci";
import { formatCurrency } from "@utils";
import { receipt } from "@assets";

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
            <Dropdown.Toggle variant="none" id="dropdown-basic">
              <CiMenuKebab size="30px" className="cursor" color="#1f2666" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Edit Profile</Dropdown.Item>
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
                <div className="d-md-flex align-items-center gap-3 text-center text-md-start">
                  <Image
                    src={item.img}
                    alt={item.title}
                    style={{ height: "330px", width: "190px" }}
                    className="rounded-4 object-fit-cover mb-3 mb-lg-0"
                  />
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
                    gap={2}
                    direction="horizontal"
                    className="justify-content-center mb-3"
                  >
                    <hr style={{ width: "60px", border: ".9px solid" }} />
                    <h1
                      style={{ color: "var(--mainBlue)", fontSize: "1.25rem" }}
                    >
                      Other Details
                    </h1>
                    <hr style={{ width: "60px", border: ".9px solid" }} />
                  </Stack>
                  <div className="d-flex justify-content-between gap-2 w-100">
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
                  <div className="d-flex justify-content-between gap-2 w-100 my-3">
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
                    gap={2}
                    direction="horizontal"
                    className="justify-content-center mb-3"
                  >
                    <hr style={{ width: "60px", border: ".9px solid" }} />
                    <h1
                      style={{ color: "var(--mainBlue)", fontSize: "1.25rem" }}
                    >
                      Payment Details
                    </h1>
                    <hr style={{ width: "60px", border: ".9px solid" }} />
                  </Stack>
                  <div className="d-flex justify-content-center  gap-2 w-100 my-3 text-center">
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
                        fontSize: "1.25rem",
                      }}
                    >
                      Discount
                    </Form.Label>
                    <Form.Select size="lg" className="mb-4 text-secondary">
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
          setShowPicModal={setShowPicModal}
          data={data}
          current={current}
        />
      )}
    </>
  );
}

StudentProfile.propTypes = {
  showPicModal: PropTypes.bool,
  setShowPicModal: PropTypes.bool,
  current: PropTypes.number,
  data: PropTypes.array,
};
