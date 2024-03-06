import { Image } from "react-bootstrap";
import { logo } from "@assets";
import { NavLink } from "react-router-dom";
import { navlinks } from "@utils";

export default function Sidebar() {
  return (
    <div className="sidebar d-flex flex-column justify-content-start align-items-center py-4">
      <NavLink to="/">
        <Image src={logo} />
      </NavLink>
      <div className="mt-5 text-center">
        {navlinks.map(({ id, Icon, name, path }) => (
          <NavLink
            to={path}
            key={id}
            className={({ isActive }) =>
              isActive ? "activeLink" : "no_activeLink"
            }
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
