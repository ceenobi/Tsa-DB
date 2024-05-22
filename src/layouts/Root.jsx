import { Outlet } from "react-router-dom";
import { Sidebar } from "@components";
import { Container } from "react-bootstrap";

export default function Root() {
  return (
    <main>
      <div className="d-flex">
        <Sidebar />
        <Container fluid className="outlet p-0">
          <div style={{ minHeight: "90dvh" }}>
            <Outlet />
          </div>
        </Container>
      </div>
    </main>
  );
}
