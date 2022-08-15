import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { AccType } from "../global/types";

export const getAccounts = async (
  setAccounts: Dispatch<SetStateAction<any>>
) => {
  try {
    const request = await axios.get("http://localhost:3001/sad");

    if (request?.data) setAccounts(request.data);
  } catch (err) {
    console.error(err, "Get accounts request error");
  }
};

export const getAccountsById = async (
  id: number | string,
  setAccount: Dispatch<SetStateAction<AccType[] | null>>
) => {
  try {
    const request = await axios.get(`http://localhost:3001/accounts/${id}`);

    if (request?.data) setAccount(request.data);
  } catch (err) {
    console.log(err, "Get account by id request error");
  }
};
