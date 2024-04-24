import { Table, Image, Stack } from "react-bootstrap";
import { useState } from "react";
import { StudentProfile, PaymentProfile } from "@components";
import { useCurrent } from "@store";
import { useLocation } from "react-router-dom";
import { formatCurrency } from "@utils";

const tNamestyle = {
  color: "var(--mainBlue)",
  fontWeight: 700,
  fontSize: "1.01rem",
};
const tstyle = {
  color: "var(--offBlack)",
  fontWeight: 600,
  fontSize: "0.884rem",
};
const tFstyle = {
  color: "var(--lightBlue)",
  fontWeight: 600,
  fontSize: "0.884rem",
};

export default function TableData({ header, extra, data, current }) {
  const [showStudentModal, setShowStudentModal] = useState(false);
  const getCurrent = useCurrent((state) => state.addCurrent);
  const location = useLocation();

  const isPath = ["/dashboard/payments", "/dashboard/payments/search"];
  const matchPaths = isPath.map((path) => path);

  const openModal = (index) => {
    getCurrent(index);
    setShowStudentModal(true);
  };

  return (
    <>
      <Table hover responsive className={extra}>
        <thead>
          <tr>
            {header.map((item, i) => (
              <th
                key={i}
                style={{
                  color: "var(--mainBlack)",
                  fontWeight: 600,
                  fontSize: "0.884rem",
                }}
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        {data?.map((item, i) => (
          <tbody key={item._id} className="border cursor">
            <tr onClick={() => openModal(i)}>
              <td style={tNamestyle}>
                <Stack direction="horizontal" gap={2}>
                  <Image
                    src={item.image}
                    style={{ height: "40px", width: "40px" }}
                    className="object-fit-cover"
                    roundedCircle
                    alt={item.fullName}
                    loading="lazy"
                  />
                  {item.fullName}
                </Stack>
              </td>
              {!matchPaths.includes(location.pathname) && (
                <td style={tstyle} className="text-capitalize">
                  <div className="mt-2">{item.pka}</div>
                </td>
              )}
              <td style={tstyle}>
                <div className="mt-2 text-capitalize">{item.courseCohort}</div>
              </td>
              {!matchPaths.includes(location.pathname) && (
                <>
                  <td style={tFstyle}>
                    <div className="mt-2">{item.email}</div>
                  </td>
                  <td style={tFstyle}>
                    <div className="mt-2">{item.phoneNumber}</div>
                  </td>
                  <td
                    style={{
                      color: "var(--mainRed)",
                    }}
                  >
                    <div className="mt-2">{item.classType}</div>
                  </td>
                </>
              )}
              {matchPaths.includes(location.pathname) && (
                <>
                  <td style={tstyle} className="text-capitalize">
                    <div className="mt-2">{formatCurrency(item.courseFee)}</div>
                  </td>

                  <td style={tstyle} className="text-capitalize text-success">
                    <div className="mt-2">
                      {formatCurrency(item.totalAmountPaid)}
                    </div>
                  </td>

                  <td style={tstyle} className="text-capitalize text-primary">
                    <div className="mt-2">
                      {item.balance ? formatCurrency(item.balance) : "-"}
                    </div>
                  </td>
                  <td
                    style={tstyle}
                    className={`text-capitalize ${
                      item.paymentStatus === "part"
                        ? "text-danger"
                        : "text-success"
                    }`}
                  >
                    <div className="mt-2">
                      {item.paymentStatus === "part" ? "part" : "full"}
                    </div>
                  </td>
                </>
              )}
            </tr>
          </tbody>
        ))}
      </Table>
      {showStudentModal && (
        <>
          {!matchPaths.includes(location.pathname) ? (
            <StudentProfile
              showStudentModal={showStudentModal}
              setShowStudentModal={setShowStudentModal}
              current={current}
              data={data}
            />
          ) : (
            <PaymentProfile
              showStudentModal={showStudentModal}
              setShowStudentModal={setShowStudentModal}
              current={current}
              data={data}
            />
          )}
        </>
      )}
    </>
  );
}
