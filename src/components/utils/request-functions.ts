import axios from "axios";
import { Dispatch, SetStateAction } from "react";

export const getAccounts = async () => {
  const request = await axios.get("http://localhost:3001")

  if(request.data) return request.data

  return []
};

export const getAccountsById = async (id: number | string) => {
  const request = await axios.get(`http://localhost:3001/accounts/${id}`);

  if(request) return request.data

  return []
};


export const getAccountsData = async (setAccounts: Dispatch<SetStateAction<any>>) => {
  setAccounts(await getAccounts())
}

export const getAccountData = async (id: number | string, setAccount:  Dispatch<SetStateAction<any>>) => {
  setAccount(await getAccountsById(id))
}




