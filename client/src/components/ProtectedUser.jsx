import useUser from "../hooks/useUser";
import { Navigate } from "react-router-dom";

export default function ProtectedUser({ children }) {
  const { isLoggedIn } = useUser();
  if (isLoggedIn) {
    return <Navigate to={"/home"} />;
  } else {
    return children;
  }
}
