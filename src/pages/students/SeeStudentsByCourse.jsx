import { useEffect, useCallback } from "react";
import { useTitle } from "@hooks";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { useGetStudentsData, useCurrent, useFilteredData } from "@store";
import { shallow } from "zustand/shallow";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@utils";
import { studentsService } from "@services";
import { TableData } from "@components";
import { tableLinks, classCohortValues } from "@utils";
import { DropdownButton, Dropdown } from "react-bootstrap";
import styles from "../pages.module.css";

export default function SeeStudentsByCourse() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  useTitle(`Search result for "${query}"`);
  const { setSearchQuery, searchQuery } = useGetStudentsData();
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

  const filterCourseCohorts = classCohortValues.filter((item, i) => i !== 0);
  const getCourseCohorts = filterCourseCohorts.map((item) => item.name);

  const allCourses = ["All Students", ...getCourseCohorts];

  const getCurrentLocation = location.pathname.split("/")[2];

  const searchStudentByCourse = useCallback(
    (item) => {
      if (item === "All Students") {
        navigate(`/dashboard/${getCurrentLocation}/search`);
      } else {
        navigate(`/dashboard/${getCurrentLocation}/search?query=${item}`);
      }
    },
    [getCurrentLocation, navigate]
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
      {isLoading ? (
        <Spinner />
      ) : (
        <TableData
          header={
            location.pathname === "/dashboard/students" ||
            location.pathname === "/dashboard/students/search"
              ? tableLinks.headers
              : tableLinks.paymentHeaders
          }
          extra="my-3"
          data={filterData}
          current={current}
        />
      )}
      {!isLoading && !isError && !searchQuery.length && (
        <span className="text-danger text-center mt-2">
          You have no student data to display
        </span>
      )}
    </div>
  );
}
