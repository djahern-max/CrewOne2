import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ roles }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token || !roles.includes(role)) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
