import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "@components";

export default function Root() {
  const location = useLocation();
  const isRootPath =
    location.pathname === "/" || location.pathname === "/login";

  return (
    <>
      <div className={!isRootPath ? "d-flex" : ""}>
        {!isRootPath && <Sidebar />}
        <main className={!isRootPath ? "outlet" : "w-100"}>
          <Outlet />
        </main>
      </div>
    </>
  );
}
