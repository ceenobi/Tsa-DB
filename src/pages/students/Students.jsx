import { useCallback } from "react";
import { useTitle } from "@hooks";
import { TableData } from "@components";
import { tableLinks, classCohortValues, Spinner } from "@utils";
import { Outlet, useLocation, useParams, useNavigate } from "react-router-dom";
import { shallow } from "zustand/shallow";
import { useCurrent, useFilteredData } from "@store";
import { DropdownButton, Dropdown } from "react-bootstrap";
import styles from "../pages.module.css";

export default function Students() {
  useTitle("Student records");
  const current = useCurrent((state) => state.current, shallow);
  const { filterData } = useFilteredData();
  const location = useLocation();
  const navigate = useNavigate();
  const { studentId } = useParams();

  const isPath = [
    `/dashboard/students/generate-docket/${studentId}`,
    "/dashboard/students/new-student",
    "/dashboard/students/search",
    `/dashboard/students/edit-profile/${studentId}`,
  ];
  const matchPaths = isPath.map((path) => path);

  const filterCourseCohorts = classCohortValues.filter((item, i) => i !== 0);
  const getCourseCohorts = filterCourseCohorts.map((item) => item.name);

  const allCourses = ["All Students", ...getCourseCohorts];

  const searchStudentByCourse = useCallback(
    (item) => {
      if (item === "All Students") {
        navigate(`/dashboard/students/search`);
      } else {
        navigate(`/dashboard/students/search?query=${item}`);
      }
    },
    [navigate]
  );

  return (
    <>
      {!matchPaths.includes(location.pathname) ? (
        <>
          {filterData?.length === 0 ? (
            <Spinner />
          ) : (
            <div>
              <div
                className={`mt-4 mt-md-5 d-flex justify-content-between align-items-center gap-3 ${styles.border}`}
              >
                <DropdownButton
                  id="dropdown-basic-button"
                  title="All Courses"
                  className="d-lg-none"
                  variant="solid"
                >
                  {allCourses.map((item, index) => (
                    <Dropdown.Item
                      key={index}
                      onClick={() => searchStudentByCourse(item)}
                      className="text-capitalize"
                    >
                      {item}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
                <div className="d-none d-lg-flex gap-4 justify-content-between align-items-center">
                  {allCourses.map((item, index) => (
                    <div
                      key={index}
                      className={
                        item === index || item === "All Students"
                          ? `${styles.activeLink}`
                          : `${styles.noActiveLink}`
                      }
                      type="button"
                      onClick={() => searchStudentByCourse(item)}
                    >
                      <h1 className="fs-6 text-capitalize">{item}</h1>
                    </div>
                  ))}
                </div>
                <span
                  className={`${styles.pStyle} text-decoration-underline cursor fw-medium`}
                  style={{ color: "var(--lightBlue)", minWidth: "fit-content" }}
                >
                  Download list
                </span>
              </div>
              <TableData
                header={tableLinks.headers}
                extra="my-3"
                data={filterData}
                current={current}
              />
            </div>
          )}
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
}
