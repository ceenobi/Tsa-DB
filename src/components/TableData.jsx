import { Table, Image, Stack } from "react-bootstrap";
import PropTypes from "prop-types";
import useCurrent from "../store/getCurrent";
import { useState } from "react";
import MyModal from "./MyModal";

export default function TableData({ header, extra, data }) {
  const [showPicModal, setShowPicModal] = useState(false);
  const currentIndex = useCurrent();
  console.log(currentIndex);
  
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
      {data.map(
        ({ id, img, title, pka, courseCohort, email, phone, classType }, i) => (
          <tbody
            key={id}
            className="border"
            onClick={() => {
              currentIndex.addCurrent(i);
              setShowPicModal(true);
            }}
          >
            <tr>
              <td style={tNamestyle}>
                <Stack direction="horizontal" gap={2}>
                  <Image src={img} roundedCircle />
                  {title}
                </Stack>
              </td>
              <td style={tstyle} className="text-capitalize">
                {pka}
              </td>
              <td style={tstyle}>{courseCohort}</td>
              <td style={tFstyle}>{email}</td>
              <td style={tFstyle}>{phone}</td>
              <td
                style={{
                  color: "var(--mainRed)",
                }}
              >
                {classType}
              </td>
            </tr>
          </tbody>
        )
      )}
      {showPicModal && (
        <>
          <MyModal>
            <h1>hthtthdc</h1>
          </MyModal>
        </>
      )}
    </Table>
  );
}

TableData.propTypes = {
  header: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.any,
  extra: PropTypes.string,
  current: PropTypes.number,
  setCurrent: PropTypes.any,
};
