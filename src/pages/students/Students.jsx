import { useEffect } from "react";
import { useTitle } from "@hooks";
import { TableData } from "@components";
import { tableLinks } from "@utils";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { shallow } from "zustand/shallow";
import { useCurrent, useFetchData } from "@store";
import styles from "../pages.module.css";

export default function Students() {
  useTitle("Student records");
  const current = useCurrent((state) => state.current, shallow);
  const fetchData = useFetchData((state) => state.fetchAndSetData);
  const data = useFetchData((state) => state.data);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  console.log(data);

  const location = useLocation();
  const { studentId } = useParams();
  const isPath = [
    `/dashboard/students/generate-docket/${studentId}`,
    "/dashboard/students/new-student",
  ];
  const matchPaths = isPath.map((path) => path);

  return (
    <>
      {!matchPaths.includes(location.pathname) ? (
        <div>
          <div className="mt-5 d-flex justify-content-between align-items-center gap-3 border-bottom">
            <div className="d-flex gap-4 overflow-x-scroll justify-content-between align-items-center">
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
              className={`${styles.pStyle} text-decoration-underline cursor fw-medium`}
              style={{ color: "var(  --lightBlue)", minWidth: "fit-content" }}
            >
              Download list
            </p>
          </div>
          <TableData
            header={tableLinks.headers}
            extra="my-3"
            data={data}
            current={current}
          />
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
}
