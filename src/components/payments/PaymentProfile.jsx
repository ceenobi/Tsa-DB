import React, { useEffect, useState } from "react";
import { MyModal, AddPaymentRecord } from "@components";
import { Row, Col, Table, Image } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";
import { formatCurrency } from "@utils";
import { useQuery } from "@tanstack/react-query";
import { useGetAStudentPaymentRecord } from "@store";
import { studentsService } from "@services";
import { Spinner } from "@utils";
import { MdEdit } from "react-icons/md";
import styles from "./payment.module.css";
import PaymentReminder from "./PaymentReminder";

export default function PaymentProfile({
  setShowStudentModal,
  showStudentModal,
  current,
  data,
}) {
  const [showModal, setShowModal] = useState(false);

  //filter students based on index to match and get student id
  const filterStudentId = data?.filter((student, index) => index === current);
  const getStudentId = filterStudentId.map((student) => student._id);
  const { student, setStudent } = useGetAStudentPaymentRecord();

  //fetch student payment data
  const {
    isLoading,
    isError,
    data: paymentData,
    error,
  } = useQuery({
    queryKey: ["studentPayment", getStudentId],
    queryFn: () => studentsService.getStudentPaymentRecord(getStudentId),
    onError: (error) => {
      console.error("Error fetching student payment data:", error);
    },
    onLoading: () => {
      <Spinner />;
    },
  });

  //store api data to zustand state
  useEffect(() => {
    if (paymentData) {
      setStudent(paymentData?.data);
    }
  }, [paymentData, setStudent]);

  //modal controls
  const handleClose = () => setShowStudentModal(false);
  const handleOpenModal = () => setShowModal(true);

  return (
    <>
      <>
        <MyModal
          show={showStudentModal}
          handleClose={handleClose}
          backdrop="static"
          title="Payment History"
          backIcon={
            <IoMdClose size="30px" className="cursor" onClick={handleClose} />
          }
          size="lg"
        >
          {isError && (
            <span className="text-danger">
              {error.message ? error.message : error}
            </span>
          )}

          {!isLoading && !isError && !student && (
            <span className="text-red-400">
              You have no student data to display
            </span>
          )}
          {isLoading ? (
            <Spinner />
          ) : (
            <div>
              <>
                <Row
                  className={`rounded-3 m-2 p-3 align-items-center ${styles.paymentBg}`}
                >
                  <Col xs={6} lg={3}>
                    <div
                      style={{ color: "var(--deepBlack)" }}
                      className="fw-bold mb-1"
                    >
                      {student.fullName}
                    </div>
                    <p style={{ color: "var(--offBlack)" }}>
                      {student.courseCohort}
                    </p>
                  </Col>
                  <Col xs={6} lg={3}>
                    <p
                      style={{ color: "var(--offBlack)" }}
                      className="mb-0 fw-medium"
                    >
                      Course Fee
                    </p>
                    <p style={{ color: "var(--mainBlue)" }} className="fw-bold">
                      {student.courseFee
                        ? formatCurrency(student.courseFee)
                        : formatCurrency(0)}
                    </p>
                  </Col>
                  <Col xs={6} lg={3}>
                    <p
                      style={{ color: "var(--offBlack)" }}
                      className="mb-0 fw-medium"
                    >
                      Payment Status
                    </p>
                    <p
                      style={{ color: "var(--mainBlue)" }}
                      className={`text-capitalize fw-bold ${
                        student.paymentStatus === "part"
                          ? "text-danger"
                          : "text-success"
                      }`}
                    >
                      {student.paymentStatus}
                    </p>
                  </Col>
                  <Col xs={12} lg={3}>
                    <PaymentReminder
                      getStudentId={getStudentId}
                      handleClosePayment={handleClose}
                    />
                  </Col>
                </Row>
                <hr />
                <Table hover responsive>
                  <thead>
                    <tr className="small">
                      <th>Payment Method</th>
                      <th>Amount Paid</th>
                      <th>Balance</th>
                      <th>Comments</th>
                      <th
                        className="text-primary cursor"
                        onClick={handleOpenModal}
                      >
                        <MdEdit />
                        Add Payment Record
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border cursor">
                    <tr>
                      {student?.payments?.map((info, i) => (
                        <React.Fragment key={i}>
                          <td className={`text-capitalize ${styles.tstyle}`}>
                            <div className="mt-2">
                              <p className="mb-0">Bank Transfer</p>
                              <Image
                                src={info.receipt}
                                style={{ width: "20px", height: "20px" }}
                              />
                            </div>
                          </td>
                          <td className={`text-capitalize ${styles.tstyle}`}>
                            <div className="mt-2">
                              <p className="mb-0 text-success">
                                {formatCurrency(info.amount)}
                              </p>
                              <span>
                                Date:{" "}
                                {info?.datePaid
                                  ? new Date(info.datePaid).toLocaleDateString(
                                      "en-GB",
                                      {
                                        day: "2-digit",
                                        month: "2-digit",
                                        year: "numeric",
                                      }
                                    )
                                  : null}
                              </span>
                            </div>
                          </td>
                        </React.Fragment>
                      ))}
                      <td className={`text-capitalize ${styles.tstyle}`}>
                        <div className="mt-2">
                          <p className="mb-0 text-danger">
                            {formatCurrency(student.balance)}
                          </p>
                        </div>
                      </td>
                      <td className={`text-capitalize ${styles.tstyle}`}>
                        <div className="mt-2">
                          <p className="mb-0 small">
                            <i>modified by:{student.modifiedBy?.name}</i>
                          </p>
                        </div>
                      </td>
                      <td className={`text-capitalize ${styles.tstyle}`}>
                        <div className="mt-2">
                          <p className="mb-0 small">
                            <i>modified by:{student.modifiedBy?.name}</i>
                          </p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </>
            </div>
          )}
        </MyModal>
      </>
      <AddPaymentRecord showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}
