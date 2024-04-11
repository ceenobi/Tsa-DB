import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Offcanvas, Image, Stack } from "react-bootstrap";
import { logo } from "@assets";
import { NavLink } from "react-router-dom";
import { navlinks } from "@utils";

export default function Drawer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
