import useUser from "../hooks/useUser";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { isLoggedIn } = useUser();
  if (!isLoggedIn) {
    return <Navigate to={"/signin"} />;
  } else {
    return children;
  }
}
