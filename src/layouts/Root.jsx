import { Outlet } from "react-router-dom";
import { Sidebar } from "@layouts";

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
