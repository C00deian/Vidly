import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, children }) => {
  // If user is not logged in, navigate to login
  if (!user) return <Navigate to="/login" replace />;

  // If user is logged in, render the children (the protected component)
  return children;
};

export default ProtectedRoute;
