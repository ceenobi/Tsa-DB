import { navBranding } from "@assets";
import { Link } from "react-router-dom";
import { Image, Container } from "react-bootstrap";

const Navbar = () => {
  return (
    <nav className="d-flex justify-content-center align-items-center p-3">
      <Container className="text-center">
        <Link to="/">
          <Image src={navBranding} alt="nav-logo" />
        </Link>
      </Container>
    </nav>
  );
};

export default Navbar;
