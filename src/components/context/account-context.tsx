import React, { createContext, useEffect, useState } from "react";
import { AccountContextProviderProps } from "../global/types";
import { getAccounts } from "../utils/request-functions";

export const AccountsContext = createContext([]);

export const AccountContextProvider: React.FC<AccountContextProviderProps> = (
  props
) => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    getAccounts(setAccounts);
  }, []);

  return (
    <AccountsContext.Provider value={accounts}>
      {props.children}
    </AccountsContext.Provider>
  );
};
