import React, { createContext, useEffect } from "react";
import { useState } from "react";
import { PageRoutes } from "./components/routes/routes";
import { getAccounts } from "./components/utils/request-functions";



export const AccountsContext = createContext([]);

const App: React.FC = () => {

  const [ data, setData] = useState()

  useEffect(() => {
    getAccounts().then((res) => {
      setData(res)
    })
  }, [])

  if(!data) {
    return <></>
  }

  return (
    <AccountsContext.Provider value={data}>
      <PageRoutes />
    </AccountsContext.Provider>
  );
};

export default App;
