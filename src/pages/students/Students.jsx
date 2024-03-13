import { useState } from "react";
import { useTitle } from "@hooks";
import { TableData } from "@components";
import { tableLinks } from "@utils";
import { Outlet, useLocation, useParams } from "react-router-dom";
import styles from "../pages.module.css";

export default function Students() {
  useTitle("Student records");
  const [current, setCurrent] = useState(0);
  const location = useLocation();
  const { studentId } = useParams();
  const isPath = [`/dashboard/students/generate-docket/${studentId}`];
  const matchPaths = isPath.map((path) => path);

  return (
    <>
      {!matchPaths.includes(location.pathname) ? (
        <div>
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
                  <h1 className="fs-6">{item}</h1>
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
            current={current}
            setCurrent={setCurrent}
          />
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
}
