import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AccountsContext } from "../../App";
import { AccountPage } from "../account-page/account-page";
import { AccType } from "../global/types";
import { MainPage } from "../main-page/main-page";

export const PageRoutes: React.FC = () => {
  const accounts = useContext(AccountsContext);

  return (
    <Routes>
      <Route path="/" element={<MainPage accounts={accounts} />} />
      {accounts.map((acc: AccType) => (
        <Route
          path={`accounts/${acc._id}`}
          key={acc._id}
          element={<AccountPage accountId={acc._id} />}
        />
      ))}
    </Routes>
  );
};
