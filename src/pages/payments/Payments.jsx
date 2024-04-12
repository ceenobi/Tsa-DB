import { useCallback } from "react";
import { useTitle } from "@hooks";
import { shallow } from "zustand/shallow";
import { useCurrent, useFilteredData } from "@store";
import { useNavigate, Outlet } from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { tableLinks, classCohortValues, Spinner } from "@utils";
import { TableData } from "@components";
import styles from "../pages.module.css";

export default function Payments() {
  const current = useCurrent((state) => state.current, shallow);
  const { filterData } = useFilteredData();
  const navigate = useNavigate();
  useTitle("Student payments");
  // const { students } = useGetStudentsData();

  // const activeCourse = useMemo(() => {
  //   return students
  //     ? students.map((course) => course.courseCohort.toLowerCase())
  //     : [];
  // }, [students]);

  // const removeCourseDuplicates = useMemo(() => {
  //   return [
  //     ...activeCourse.filter((course, i) => {
  //       return activeCourse.indexOf(course) === i && course?.length > 0;
  //     }),
  //   ];
  // }, [activeCourse]);

  const isPath = ["/dashboard/payments/search"];
  const matchPaths = isPath.map((path) => path);

  const filterCourseCohorts = classCohortValues.filter((item, i) => i !== 0);
  const getCourseCohorts = filterCourseCohorts.map((item) => item.name);

  const allCourses = ["All Students", ...getCourseCohorts];

  const searchStudentByCourse = useCallback(
    (item) => {
      if (item === "All Students") {
        navigate(`/dashboard/payments/search`);
      } else {
        navigate(`/dashboard/payments/search?query=${item}`);
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
                      role="button"
                      onClick={() => searchStudentByCourse(item)}
                    >
                      <h1 className="fs-6 text-capitalize">{item}</h1>
                    </div>
                  ))}
                </div>
              </div>
              <TableData
                header={tableLinks.paymentHeaders}
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
