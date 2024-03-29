import { useRef } from "react";
import {
  useLocation,
  Link,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import {
  Container,
  Stack,
  Form,
  InputGroup,
  Button,
  Image,
} from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { avatar } from "@assets";
import { Headings, MyButton } from "@components";
import { useDebouncedCallback } from "use-debounce";

export default function PageLayout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const inputRef = useRef(null);
  const isDashboard = location.pathname === "/";
  const isStudent =
    location.pathname.startsWith("/dashboard/students/generate-docket/") ||
    location.pathname.startsWith("/dashboard/students/edit-profile/");
  const AddStudent =
    location.pathname.startsWith("/dashboard/students/new-student") ||
    location.pathname.startsWith("/dashboard/students/edit-profile/");
  const title = isDashboard
    ? "Dashboard"
    : isStudent
    ? location.pathname.split("/")[2]
    : AddStudent
    ? location.pathname.split("/")[3]
    : location.pathname.split("/").pop();

  const query = searchParams.get("query") || "";

  const handleSearch = useDebouncedCallback((e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (e.target.value) {
      e.target.value.length > 3 && params.set("query", e.target.value);
    } else {
      params.delete("query");
    }
    navigate(`/dashboard/students/search?${params}`);
  }, 300);

  const deleteParams = () => {
    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.delete("query");
    navigate(window.location.pathname + "?" + newSearchParams.toString());
    inputRef.current.value = "";
  };

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
                ref={inputRef}
                onChange={handleSearch}
              />
              <Button variant="none">
                {query ? (
                  <IoCloseSharp size="20px" onClick={deleteParams} />
                ) : (
                  <FiSearch size="18px" color="#747474" />
                )}
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
    </Container>
  );
}
