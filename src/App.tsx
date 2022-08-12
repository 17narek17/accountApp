import React from "react";
import { AccountContextProvider } from "./components/context/account-context";
import { PageRoutes } from "./components/routes/routes";

const App: React.FC = () => {
  return (
    <AccountContextProvider>
      <PageRoutes />
    </AccountContextProvider>
  );
};

export default App;
