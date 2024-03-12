import { useState } from "react";
import { useTitle } from "@hooks";
import { TableData } from "@components";
import { tableLinks } from "@utils";
import styles from "./pages.module.css";

export default function Students() {
  useTitle("Student records");
  const [current, setCurrent] = useState(0);

  return (
    <>
      <div className="mt-5 d-flex justify-content-between align-items-center border-bottom">
        <div className="d-flex gap-4 justify-content-between align-items-center">
          {["All Students", ...tableLinks.courses].map((item, index) => (
            <div
              key={index}
              className={
                index === current
                  ? `${styles.activeLink}`
                  : `${styles.noActiveLink}`
              }
              type="button"
            >
              <h1 className="fs-6" onClick={() => setCurrent(index)}>
                {item}
              </h1>
            </div>
          ))}
        </div>
        <p
          className="text-decoration-underline cursor fw-medium"
          style={{ fontSize: "1.125rem", color: "var(  --lightBlue)" }}
        >
          Download list
        </p>
      </div>
      <TableData
        header={tableLinks.headers}
        extra="my-3"
        data={tableLinks.data}
        // current={current}
        // setCurrent={setCurrent}
      />
    </>
  );
}
