import { useMemo, useCallback } from "react";
import { useTitle } from "@hooks";
import { shallow } from "zustand/shallow";
import { useCurrent, useGetStudentsData, useFilteredData } from "@store";
import { useNavigate } from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { tableLinks } from "@utils";
import { TableData } from "@components";
import styles from "../pages.module.css";

export default function Payments() {
  useTitle("Student payments");
  const current = useCurrent((state) => state.current, shallow);
  const { students } = useGetStudentsData();
  const { filterData } = useFilteredData();
  const navigate = useNavigate();

  const activeCourse = useMemo(() => {
    return students
      ? students.map((course) => course.courseCohort.toLowerCase())
      : [];
  }, [students]);

  const removeCourseDuplicates = useMemo(() => {
    return [
      ...activeCourse.filter((course, i) => {
        return activeCourse.indexOf(course) === i && course?.length > 0;
      }),
    ];
  }, [activeCourse]);

  const allCourses = ["All Students", ...removeCourseDuplicates];

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
      </div>
      <TableData
        header={tableLinks.paymentHeaders}
        extra="my-3"
        data={filterData}
        current={current}
      />
    </div>
  );
}
