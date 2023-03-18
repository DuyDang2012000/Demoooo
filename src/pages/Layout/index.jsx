import React, { useEffect } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";

function Layout() {
  const isAuth = true;

  if (!isAuth) {
    return <Navigate to="/auth" />;
  }
  return (
    <>
      <ul>
        <Link to="/" className="nav-link">
          homep
        </Link>
        <Link to="/page" className="nav-link">
          pagep
        </Link>
      </ul>
      <Outlet />
    </>
  );
}

export default Layout;
