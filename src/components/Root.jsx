import { Outlet } from "react-router-dom";
import { Sidebar } from "@components";

export default function Root() {
  return (
    <main>
      <div className="d-flex">
        <Sidebar />
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
