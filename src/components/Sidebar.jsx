import { Image } from "react-bootstrap";
import { logo } from "@assets";
import { NavLink, useNavigate } from "react-router-dom";
import { navlinks } from "@utils";
import { IoMdLogOut } from "react-icons/io";
import { studentsService } from "@services";
import toast from "react-hot-toast";

export default function Sidebar() {
  const navigate = useNavigate();

  const logOut = () => {
    studentsService.logout();
    toast.success("You are logged out");
    navigate("/login");
  };

  return (
    <div className="sidebar d-none d-lg-block py-4 px-2">
      <div className="innerSidebar p-4">
        <div className="text-center">
          <NavLink to="/">
            <Image src={logo} alt="logo" />
          </NavLink>
          <div className="mt-5 text-center">
            {navlinks.map(({ id, Icon, name, path }) => (
              <NavLink
                to={`/${path}`}
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
        <div
          className="d-flex flex-column align-items-center no_activeLink logout cursor"
          onClick={logOut}
        >
          <IoMdLogOut size="30px" />
          <span style={{ fontSize: "0.875rem" }}>Logout</span>
        </div>
      </div>
    </div>
  );
}
