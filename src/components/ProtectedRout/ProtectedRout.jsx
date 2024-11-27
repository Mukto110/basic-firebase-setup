import React, { useContext } from "react";
import { authContext } from "../authProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRout = ({ children }) => {
  const { user } = useContext(authContext);
  const location = useLocation();
  console.log(location);
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname} />;
};

export default ProtectedRout;
