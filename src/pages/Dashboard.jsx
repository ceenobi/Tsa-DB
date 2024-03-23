import { DropdownButton, Dropdown, Row, Col, Image } from "react-bootstrap";
import { useLocation, Outlet, useParams } from "react-router-dom";
import { Headings, TableData } from "@components";
import { formatCurrency, tableLinks, Spinner } from "@utils";
import { useTitle } from "@hooks";
import { useEffect } from "react";
import { PageLayout } from "@layouts";
import { useGetStudentsData } from "@store";
import { useQuery } from "@tanstack/react-query";
import { studentsService } from "@services";
import { studentspic, coins } from "@assets";
import styles from "./pages.module.css";

export default function Dashboard() {
  useTitle("Dashboard");
  const location = useLocation();
  const { studentId } = useParams();
  const { students, setStudents } = useGetStudentsData();
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["studentsData"],
    queryFn: studentsService.getAllStudents,
  });

  console.log("sss", data?.data);

  useEffect(() => {
    if (data) {
      setStudents(data?.data);
    }
  }, [data, setStudents]);

  console.log("stud", students);

  const isPath = [
    "/dashboard/payments",
    "/dashboard/students",
    `/dashboard/students/generate-docket/${studentId}`,
    "/dashboard/students/new-student",
    `/dashboard/students/edit-profile/${studentId}`,
  ];
  const matchPaths = isPath.map((path) => path);

  return (
    <PageLayout>
      {matchPaths.includes(location.pathname) ? (
        <div style={{ minHeight: "85vh" }}>
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
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
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
                    title={students.numOfStudents}
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
                    title={formatCurrency(students.revenue)}
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
                    title={formatCurrency(students.balance)}
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
            <span
              className="text-decoration-underline cursor fw-medium text-end"
              style={{
                fontSize: "1.12rem",
                color: "var(--lightBlue)",
                minWidth: "fit-content",
              }}
            >
              View All Students
            </span>
          </div>
          {isError && (
            <span className="text-danger">
              {error.message ? error.message : error}
            </span>
          )}
          {isLoading && <Spinner />}
          {!isLoading && !isError && students && !students.students?.length && (
            <span className="text-red-400">
              You have no students data to display
            </span>
          )}
          {students.students && students.students.length > 0 && (
            <TableData
              header={tableLinks.headers}
              extra="my-3"
              data={students}
            />
          )}
        </>
      )}
    </PageLayout>
  );
}
