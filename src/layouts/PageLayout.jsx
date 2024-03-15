import { useLocation, Link, useParams } from "react-router-dom";
import {
  Container,
  Stack,
  Form,
  InputGroup,
  Button,
  Image,
} from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { avatar } from "@assets";
import { Headings, MyButton } from "@components";

export default function PageLayout({ children }) {
  const location = useLocation();
  const { studentId } = useParams();
  const isDashboard = location.pathname === "/";
  const isStudent = location.pathname.startsWith(
    "/dashboard/students/generate-docket/"
  );
  const AddStudent = location.pathname.startsWith(
    "/dashboard/students/new-student"
  );
  const title = isDashboard
    ? "Dashboard"
    : isStudent
    ? location.pathname.split("/")[2]
    : AddStudent
    ? location.pathname.split("/")[3]
    : location.pathname.split("/").pop();

  const isPath = [
    `/dashboard/students/generate-docket/${studentId}`,
    "/dashboard/students/new-student",
  ];
  const matchPaths = isPath.map((path) => path);

  return (
    <Container fluid className="p-3">
      <div className="d-flex justify-content-between align-items-center">
        <Headings
          title={title}
          size="24px"
          color="var(--mainBlue)"
          className="text-capitalize mt-2 fw-bold"
        />
        <Stack direction="horizontal" gap={2} className="d-none d-md-flex">
          <Form className="searchBox">
            <InputGroup className="rounded-1 border bg-light">
              <Form.Control
                placeholder="Search for courses, classes, students and more..."
                aria-label="Search bar"
                className="rounded-1 border-0 bg-transparent"
              />
              <Button variant="none" type="submit">
                <FiSearch size="18px" color="#747474" />
              </Button>
            </InputGroup>
          </Form>
          {!AddStudent && (
            <MyButton
              variant="primary"
              text="Enroll New Student"
              className="fw-bold"
              style={{ minWidth: "fit-content" }}
              as={Link}
              to="/dashboard/students/new-student"
            />
          )}
        </Stack>
        <Image src={avatar} roundedCircle />
      </div>
      {children}
      {!matchPaths.includes(location.pathname) && (
        <div
          className="d-flex justify-content-between align-items-center mt-5"
          style={{ color: "var(--offBlack)" }}
        >
          <span className="d-none d-md-block">20 Entries Per Page</span>
          <Stack direction="horizontal" gap={2}>
            <span>
              Page {1} of {50}
            </span>
          </Stack>
          <div className="d-flex gap-3">
            <MyButton
              text="Previous"
              iconA={
                <GrFormPrevious size="24px" className="d-none d-md-flex" />
              }
              variant="none"
              className="border"
              style={{
                borderColor: "var(--greyLight)",
                color: "var(--offBlack)",
              }}
            />
            <MyButton
              text="Next"
              iconB={<GrFormNext size="24px" className="d-none d-md-flex" />}
              variant="none"
              className="border"
              style={{
                borderColor: "var(--greyLight)",
                color: "var(--offBlack)",
              }}
            />
          </div>
        </div>
      )}
    </Container>
  );
}
