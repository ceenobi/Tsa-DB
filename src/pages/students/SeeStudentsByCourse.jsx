import { useEffect } from "react";
import { useTitle } from "@hooks";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useGetStudentsByCourse, useGetStudentsData, useCurrent } from "@store";
import { shallow } from "zustand/shallow";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@utils";
import { studentsService } from "@services";
import styles from "../pages.module.css";
import { TableData } from "@components";
import { tableLinks } from "@utils";

export default function SeeStudentsByCourse() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  useTitle(`Search result for "${query}"`);
  console.log(query);
  const { course, setCourse } = useGetStudentsByCourse();
  const { students } = useGetStudentsData();
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
      setCourse(data?.data);
    }
  }, [data, setCourse]);

  const activeCourse = students?.students
    ? students.students.map((course) => course.courseCohort.toLowerCase())
    : [];
  const removeCourseDuplicates = [
    ...activeCourse.filter((course, i) => {
      return activeCourse.indexOf(course) === i && course?.length > 0;
    }),
  ];

  const allCourses = ["All Students", ...removeCourseDuplicates];

  const searchStudentByCourse = (item) => {
    navigate(`/dashboard/students/search?query=${item}`);
  };

  console.log("kll", data);
  console.log("k", course);

  return (
    <div>
      {isError && (
        <span className="text-danger">
          {error.message ? error.message : error}
        </span>
      )}
      {isLoading && <Spinner />}
      {!isLoading && !isError && !course && (
        <span className="text-red-400">
          You have no student data to display
        </span>
      )}
      <div
        className={`mt-4 mt-md-5 d-flex justify-content-between align-items-center gap-3 ${styles.border}`}
      >
        <div className="d-none d-md-flex gap-4 justify-content-between align-items-center">
          {allCourses.map((item, index) => (
            <div
              key={index}
              className={
                item === query
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
        data={course}
        current={current}
      />
    </div>
  );
}
