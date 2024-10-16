import React from "react";
import { Stack } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";

const DashboardLayout = () => {

  // const { isLoggedIn } = useSelector((state) => state.auth);
  const isLoggedIn = true;

  if (!isLoggedIn) {
    return <Navigate to="/auth/login" />
  }

  return (
    <Stack direction={"row"}>
      <SideBar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
