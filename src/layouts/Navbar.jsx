import { navBranding } from "@assets";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

const Navbar = () => {
  return (
    <nav className="d-flex justify-content-center align-items-center">
      <Link to="/">
        <Image src={navBranding} alt="nav-logo" />
      </Link>
    </nav>
  );
};

export default Navbar;
