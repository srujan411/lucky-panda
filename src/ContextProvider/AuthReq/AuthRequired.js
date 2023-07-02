import { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";

import { AuthContext } from "../../";

export default function AuthRequired({ children }) {
  let location = useLocation();
  const { state } = useContext(AuthContext);
  return state.isLoggedin ? children: <Navigate to="/signin" state={{from: location}} />
}
