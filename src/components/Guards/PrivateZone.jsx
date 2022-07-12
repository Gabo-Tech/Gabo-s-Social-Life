import { Redirect } from "react-router-dom";

export default function PrivateZone({ children }){
  const user = localStorage.getItem("profile");
  return user ? children : <Redirect to="/auth" />;
};
