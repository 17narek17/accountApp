import React from "react";
import { Route, Routes } from "react-router-dom";
import { AccountPage } from "../account-page/account-page";
import { MainPage } from "../main-page/main-page";

export const PageRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path={"accounts/:id"} element={<AccountPage />} />
    </Routes>
  );
};
