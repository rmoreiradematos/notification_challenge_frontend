import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import NotificationSubscribersPage from "./pages/NotifySubscribersPage";
import LogsPage from "./pages/LogsPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<CreateAccountPage />} />
        <Route path="/home" element={<NotificationSubscribersPage />} />
        <Route path="/logs" element={<LogsPage />} />
      </Routes>
    </Router>
  );
};
export default AppRouter;
