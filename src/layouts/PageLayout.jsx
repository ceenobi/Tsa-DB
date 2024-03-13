import { useLocation } from "react-router-dom";
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
  const isDashboard = location.pathname === "/";
  const isStudent = location.pathname.startsWith(
    "/dashboard/students/generate-docket/"
  );
  const title = isDashboard
    ? "Dashboard"
    : isStudent
    ? location.pathname.split("/")[2]
    : location.pathname.split("/").pop();

  return (
    <Container fluid className="p-4">
      <div className="d-flex justify-content-between align-items-center">
        <Headings
          title={title}
          size="24px"
          color="var(--mainBlue)"
          className="text-capitalize fw-bold"
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
          <MyButton
            variant="primary"
            text="Enroll New Student"
            className="fw-bold"
          />
        </Stack>
        <Image src={avatar} roundedCircle />
      </div>
      {children}
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ color: "var(--offBlack)" }}
      >
        <p>20 Entries Per Page</p>
        <Stack direction="horizontal" gap={2}>
          <p>
            Page {1} of {50}
          </p>
        </Stack>
        <Stack direction="horizontal" gap={3}>
          <MyButton
            text="Previous"
            iconA={<GrFormPrevious size="24px" />}
            variant="none"
            className="border"
            style={{
              borderColor: "var(--greyLight)",
              color: "var(--offBlack)",
            }}
          />
          <MyButton
            text="Next"
            iconB={<GrFormNext size="24px" />}
            variant="solid"
            className="border"
            style={{
              borderColor: "var(--greyLight)",
              color: "var(--offBlack)",
            }}
          />
        </Stack>
      </div>
    </Container>
  );
}
