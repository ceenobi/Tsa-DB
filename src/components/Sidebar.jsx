import { Image } from "react-bootstrap";
import { logo } from "@assets";
import { NavLink, useLocation } from "react-router-dom";
import { navlinks } from "@utils";
import classNames from "classnames";
import { useState } from "react";

export default function Sidebar() {
  const location = useLocation();
  const [current, setCurrent] = useState(0);
  const paths = ["dashboard", "/dashboard/students", "/dashboard/payments"];
  const matchPaths = paths.map((path) => path);

  console.log(location.pathname.split("dashboard/").pop());

  return (
    <div className="sidebar d-none d-md-flex flex-column justify-content-start align-items-center py-4">
      <NavLink to="/">
        <Image src={logo} />
      </NavLink>
      <div className="mt-5 text-center">
        {navlinks.map(({ id, Icon, name, path }, i) => (
          <NavLink
            to={`/${path}`}
            key={id}
            className={i === current ? "activeLink" : "no_activeLink"}
            onClick={() => setCurrent(i)}
          >
            <div className="d-flex flex-column align-items-center mb-4">
              <Icon style={{ fontSize: "1.25rem" }} />
              <span style={{ fontSize: "0.875rem" }}>{name}</span>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
