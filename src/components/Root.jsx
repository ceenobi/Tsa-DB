import { useOutlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Root() {
  const currentOutlet = useOutlet();

  return (
    <>
      <div className="d-flex min-vh-100">
        <Sidebar />
        <main className="outlet">{currentOutlet}</main>
      </div>
    </>
  );
}
