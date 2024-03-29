import { useEffect, useMemo, useCallback } from "react";
import { DropdownButton, Dropdown, Row, Col, Image } from "react-bootstrap";
import {
  useLocation,
  Outlet,
  useParams,
  useNavigate,
  Link,
} from "react-router-dom";
import { Headings, TableData, Paginate } from "@components";
import { formatCurrency, tableLinks, Spinner } from "@utils";
import { useTitle } from "@hooks";
import { PageLayout } from "@layouts";
import { useGetStudentsData, useCurrent, useFilteredData } from "@store";
import { useQuery } from "@tanstack/react-query";
import { studentsService } from "@services";
import { studentspic, coins } from "@assets";
import { shallow } from "zustand/shallow";
import styles from "./pages.module.css";

export default function Dashboard() {
  useTitle("Dashboard");
  const location = useLocation();
  const navigate = useNavigate();
  const { studentId } = useParams();
  const current = useCurrent((state) => state.current, shallow);
  const { students, setStudents, searchQuery } = useGetStudentsData();
  const { filterData, setFilterData, itemsPerPage } = useFilteredData();
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["studentsData"],
    queryFn: studentsService.getAllStudents,
    onError: (error) => {
      console.error("Error fetching students data:", error);
    },
    onLoading: () => {
      <Spinner />;
    },
  });

  useEffect(() => {
    if (data) {
      setStudents(data?.data.students);
    }
  }, [data, setStudents]);

  const isPath = [
    "/dashboard/payments",
    "/dashboard/students",
    `/dashboard/students/generate-docket/${studentId}`,
    "/dashboard/students/new-student",
    "/dashboard/students/search",
    `/dashboard/students/edit-profile/${studentId}`,
  ];
  const matchPaths = isPath.map((path) => path);

  const hidePagination = [
    `/dashboard/students/generate-docket/${studentId}`,
    `/dashboard/students/edit-profile/${studentId}`,
    "/dashboard/students/new-student",
  ];
  const noPaginate = hidePagination.map((path) => path);

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

  const allCourses = [...removeCourseDuplicates];

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
    <PageLayout>
      {matchPaths.includes(location.pathname) ? (
        <div style={{ minHeight: "95dvh" }}>
          <Outlet />
        </div>
      ) : (
        <>
          <DropdownButton
            id="dropdown-basic-button"
            title="All Courses"
            className="mt-3 mt-md-5"
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
          <Row className="mt-3 gy-2">
            <Col md={6} lg={4} style={{ height: "175px" }}>
              <div
                className="d-flex justify-content-between align-items-center rounded-2 border p-4
                  "
                style={{ minWidth: "100%" }}
              >
                <div>
                  <p className="mb-3" style={{ color: "var(--mainBlue)" }}>
                    Enrolled Students
                  </p>
                  <Headings
                    title={
                      data?.data.numOfStudents ? data?.data.numOfStudents : 0
                    }
                    className={styles.h1}
                    color={"var( --deepBlack)"}
                  />
                </div>
                <Image
                  src={studentspic}
                  className={styles.dashboardImg}
                  alt="illustration"
                />
              </div>
            </Col>
            <Col md={6} lg={4} style={{ height: "175px" }}>
              <div
                className="d-flex justify-content-between align-items-center rounded-2 border p-4
                  "
                style={{ minWidth: "100%" }}
              >
                <div>
                  <p className="mb-3" style={{ color: "var(--mainBlue)" }}>
                    Total Revenue
                  </p>
                  <Headings
                    title={
                      data?.data.revenue
                        ? formatCurrency(data?.data.revenue)
                        : formatCurrency(0)
                    }
                    className={styles.h1}
                    color={"var( --mainGreen)"}
                  />
                </div>
                <Image
                  src={coins}
                  className={styles.dashboardImg}
                  alt="illustration"
                />
              </div>
            </Col>
            <Col md={6} lg={4} style={{ height: "175px" }}>
              <div
                className="d-flex justify-content-between align-items-center rounded-2 border p-4
                  "
                style={{ minWidth: "100%" }}
              >
                <div>
                  <p className="mb-3" style={{ color: "var(--mainBlue)" }}>
                    Total Outstanding
                  </p>
                  <Headings
                    title={
                      data?.data.balance
                        ? formatCurrency(data?.data.balance)
                        : formatCurrency(0)
                    }
                    className={styles.h1}
                    color={"var( --mainRed)"}
                  />
                </div>
                <Image
                  src={coins}
                  className={styles.dashboardImg}
                  alt="illustration"
                />
              </div>
            </Col>
          </Row>
          <div className="mt-5 d-flex justify-content-between gap-4 gap-md-0 align-items-center">
            <Headings
              title="Recently Enrolled Students"
              size="1.25rem"
              color="var(--mainBlue)"
              className="fw-bold"
            />
            <Link
              to="/dashboard/students"
              className="text-decoration-underline cursor fw-medium text-end"
              style={{
                fontSize: "1.12rem",
                color: "var(--lightBlue)",
                minWidth: "fit-content",
              }}
            >
              View All Students
            </Link>
          </div>
          {isError && (
            <span className="text-danger">
              {error.message ? error.message : error}
            </span>
          )}

          {!isLoading && !isError && students && !students?.length && (
            <span className="text-red-400">
              You have no students data to display
            </span>
          )}
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              {students && students.length > 0 && (
                <TableData
                  header={tableLinks.headers}
                  extra="my-3"
                  data={filterData}
                  current={current}
                />
              )}
            </>
          )}
        </>
      )}
      {!noPaginate.includes(location.pathname) && (
        <Paginate
          data={searchQuery.length > 0 ? searchQuery : students}
          itemsPerPage={itemsPerPage}
          setFilterData={setFilterData}
        />
      )}
    </PageLayout>
  );
}
