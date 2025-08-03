import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Account from "./pages/Account";
import Bookings from "./pages/Bookings";
import Settings from "./pages/Settings";
import Villa from "./pages/Villa";
import Users from "./pages/Users";
import Login from "./pages/Login";
import PageNotfound from "./pages/PageNotfound";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="account" element={<Account />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="settings" element={<Settings />} />
            <Route path="villa" element={<Villa />} />
            <Route path="users" element={<Users />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
