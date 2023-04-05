import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import MyNavbar from "../Components/MyNavbar";

function Layout() {
  return (
    <>
      <MyNavbar />

      <Suspense feedback={<div>Loading.......</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default Layout;
