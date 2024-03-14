import { Table, Image, Stack } from "react-bootstrap";
import { useState } from "react";
import { StudentProfile } from "@components";
import { useCurrent } from "@store";


export default function TableData({ header, extra, data, current }) {
  const [showPicModal, setShowPicModal] = useState(false);
  const getCurrent = useCurrent((state) => state.addCurrent);

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

  const openModal = (index) => {
    getCurrent(index);
    setShowPicModal(true);
  };

  return (
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
      {data.map((item, i) => (
        <tbody key={item.id} className="border cursor">
          <tr onClick={() => openModal(i)}>
            <td style={tNamestyle}>
              <Stack direction="horizontal" gap={2}>
                <Image
                  src={item.img}
                  style={{ height: "40px", width: "40px" }}
                  className="object-fit-cover"
                  roundedCircle
                />
                {item.title}
              </Stack>
            </td>
            <td style={tstyle} className="text-capitalize">
              <div className="mt-2">{item.pka}</div>
            </td>
            <td style={tstyle}>
              {" "}
              <div className="mt-2">{item.courseCohort}</div>
            </td>
            <td style={tFstyle}>
              {" "}
              <div className="mt-2">{item.email}</div>
            </td>
            <td style={tFstyle}>
              {" "}
              <div className="mt-2">{item.phone}</div>
            </td>
            <td
              style={{
                color: "var(--mainRed)",
              }}
            >
              <div className="mt-2">{item.classType}</div>
            </td>
          </tr>
        </tbody>
      ))}
      {showPicModal && (
        <>
          <StudentProfile
            showPicModal={showPicModal}
            setShowPicModal={setShowPicModal}
            current={current}
            data={data}
          />
        </>
      )}
    </Table>
  );
}
