import { Navigate, useLocation } from "react-router-dom";

export default function Protected({ children }) {
  const location = useLocation();
  const token = localStorage.getItem("adminToken");

  if (!token) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }
  return children;
}
