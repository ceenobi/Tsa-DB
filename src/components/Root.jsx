import { useOutlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Root() {
  const currentOutlet = useOutlet();
  const location = useLocation() 
  
  return (
    <>
      <div className="d-flex min-vh-100">
       {!location.pathname.includes("/") && <Sidebar />} 
        <main className="outlet">{currentOutlet}</main>
      </div>
    </>
  );
}
