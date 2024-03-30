import { useEffect, useMemo, useCallback } from "react";
import { useTitle } from "@hooks";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useGetStudentsData, useCurrent, useFilteredData } from "@store";
import { shallow } from "zustand/shallow";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@utils";
import { studentsService } from "@services";
import { TableData } from "@components";
import { tableLinks } from "@utils";
import { DropdownButton, Dropdown } from "react-bootstrap";
import styles from "../pages.module.css";

export default function SeeStudentsByCourse() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  useTitle(`Search result for "${query}"`);
  const { students, setSearchQuery, searchQuery } = useGetStudentsData();
  const { filterData } = useFilteredData();
  const current = useCurrent((state) => state.current, shallow);
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["studentsByCourse", query],
    queryFn: () => studentsService.searchStudentsViaCourse(query),
    onError: (error) => {
      console.error("Error fetching students data:", error);
    },
    onLoading: () => {
      <Spinner />;
    },
  });

  useEffect(() => {
    if (data) {
      setSearchQuery(data?.data.students);
    }
  }, [data, setSearchQuery]);

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
                item === query || item === "All Students"
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
      {isError && (
        <span className="text-danger text-center mt-2">
          {error.message ? error.message : error}
        </span>
      )}

      {!isLoading && !isError && !searchQuery && (
        <span className="text-danger text-center mt-2">
          You have no student data to display
        </span>
      )}
      {isLoading ? (
        <Spinner />
      ) : (
        <TableData
          header={tableLinks.headers}
          extra="my-3"
          data={filterData}
          current={current}
        />
      )}
    </div>
  );
}
