import { DropdownButton, Dropdown, Row, Col, Image } from "react-bootstrap";
import { useLocation, Outlet, useParams } from "react-router-dom";
import { Headings, TableData } from "@components";
import { dashboardLinks, formatCurrency, tableLinks } from "@utils";
import { useTitle } from "@hooks";
import { PageLayout } from "@layouts";

export default function Dashboard() {
  useTitle("Dashboard");
  const location = useLocation();
  const { studentId } = useParams();
  const isPath = [
    "/dashboard/payments",
    "/dashboard/students",
    `/dashboard/students/generate-docket/${studentId}`,
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
            className="mt-5"
            variant="solid"
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
          <Row className="mt-3 gy-2">
            {dashboardLinks.map(({ id, title, number, img }) => (
              <Col key={id} md={6} lg={4} style={{ height: "175px" }}>
                <div
                  className="d-flex justify-content-between align-items-center rounded-2 border p-4"
                  style={{ minWidth: "fit-content" }}
                >
                  <div>
                    <p
                      className="mb-3 small"
                      style={{ color: "var(--mainBlue)" }}
                    >
                      {title}
                    </p>
                    <Headings
                      title={
                        id === 2 || id === 3 ? formatCurrency(number) : number
                      }
                      size="1.625rem"
                      color={
                        (id === 2 && "var( --mainGreen)") ||
                        (id === 3 && "var( --mainRed)") ||
                        "var( --deepBlack)"
                      }
                    />
                  </div>
                  <Image
                    src={img}
                    style={{ height: "7.678rem" }}
                    className="img-fluid"
                    alt="illustration"
                  />
                </div>
              </Col>
            ))}
          </Row>
          <div className="mt-5 d-flex justify-content-between align-items-center">
            <Headings
              title="Recently Enrolled Students"
              size="1.25rem"
              color="var( --mainBlue)"
              className="fw-bold"
            />
            <p
              className="text-decoration-underline cursor fw-medium"
              style={{ fontSize: "1.125rem", color: "var(  --lightBlue)" }}
            >
              View All Students
            </p>
          </div>
          <TableData
            header={tableLinks.headers}
            extra="my-3"
            data={tableLinks.data}
          />
        </>
      )}
    </PageLayout>
  );
}
