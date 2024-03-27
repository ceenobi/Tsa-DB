import { useMemo, useCallback } from "react";
import { useTitle } from "@hooks";
import { TableData } from "@components";
import { tableLinks } from "@utils";
import { Outlet, useLocation, useParams, useNavigate } from "react-router-dom";
import { shallow } from "zustand/shallow";
import { useCurrent, useGetStudentsData } from "@store";
import { DropdownButton, Dropdown } from "react-bootstrap";
import styles from "../pages.module.css";

export default function Students() {
  useTitle("Student records");
  const current = useCurrent((state) => state.current, shallow);
  const { students } = useGetStudentsData();
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

  const activeCourse = useMemo(() => {
    return students?.students
      ? students.students.map((course) => course.courseCohort.toLowerCase())
      : [];
  }, [students?.students]);

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
        navigate(`/dashboard/students`);
      } else {
        navigate(`/dashboard/students/search?query=${item}`);
      }
    },
    [navigate]
  );

  return (
    <>
      {!matchPaths.includes(location.pathname) ? (
        <div>
          <div
            className={`mt-4 mt-md-5 d-flex justify-content-between align-items-center gap-3 ${styles.border}`}
          >
            <DropdownButton
              id="dropdown-basic-button"
              title="All Courses"
              className="d-md-none"
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
            <div className="d-none d-md-flex gap-4 justify-content-between align-items-center">
              {allCourses.map((item, index) => (
                <div
                  key={index}
                  className={
                    item === index
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
            data={students}
            current={current}
          />
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
}
