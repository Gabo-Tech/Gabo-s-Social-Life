import { Navigate } from "react-router-dom";

export default function AdminZone({ children }){
  const user = JSON.parse(localStorage.getItem("profile"));
  return user?.user.role === 'admin' ? children : <Navigate to="/" />;
};