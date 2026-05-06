import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, isAdmin }) {
  if (!isAdmin) {
    return <Navigate to="/" />;
  }

  return children;
}