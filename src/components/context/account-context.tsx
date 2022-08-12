import React, { createContext, FC, useEffect, useState } from 'react';
import { AccountContextProviderProps } from '../global/types';
import { getAccountsData} from '../utils/request-functions';

export const AccountsContext = createContext([])

export const AccountContextProvider:FC<AccountContextProviderProps> = (props) => {
    const [accounts, setAccounts] = useState([])
    
    useEffect(() => {
        getAccountsData(setAccounts)
    }, [])

    return (
        <AccountsContext.Provider value={accounts}>
            {props.children}
        </AccountsContext.Provider>
    )
}