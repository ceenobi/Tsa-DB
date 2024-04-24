import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Offcanvas, Image, Stack } from "react-bootstrap";
import { logo } from "@assets";
import { NavLink, useNavigate } from "react-router-dom";
import { navlinks } from "@utils";
import { IoMdLogOut } from "react-icons/io";
import { studentsService } from "@services";
import toast from "react-hot-toast";

export default function Drawer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const logOut = () => {
    studentsService.logout();
    toast.success("You are logged out");
    navigate("/login");
  };

  return (
    <>
      <CiMenuBurger onClick={handleShow} size="24px" className="d-lg-none" />
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Stack
              direction="horizontal"
              gap={2}
              className="align-items-center"
            >
              <NavLink
                to="/"
                onClick={handleClose}
                className={({ isActive }) =>
                  isActive ? "activeLink" : "no_activeLink"
                }
              >
                <Image src={logo} alt="logo" />
              </NavLink>
              <NavLink to="/" className="fw-bold fs-4">
                TechStudio Academy
              </NavLink>
            </Stack>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="mt-5 text-center">
            {navlinks.map(({ id, Icon, name, path }) => (
              <NavLink
                to={`/${path}`}
                key={id}
                className={({ isActive }) =>
                  isActive ? "text-primary" : "no_activeLink"
                }
                onClick={handleClose}
              >
                <div className="d-flex flex-column align-items-center mb-4">
                  <Icon style={{ fontSize: "2rem" }} />
                  <span style={{ fontSize: "1.7rem" }}>{name}</span>
                </div>
              </NavLink>
            ))}
            <div
              className="d-flex flex-column align-items-center no_activeLink logout cursor"
              onClick={logOut}
            >
              <IoMdLogOut size="30px" />
              <span style={{ fontSize: "1.7rem" }}>Logout</span>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
