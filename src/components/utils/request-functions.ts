import axios from "axios";

export const getAccounts = async () => {
  const request = await axios.get("http://localhost:3001/")

  return await request.data;
};

export const getAccountsById = async (id: any) => {
  const request = await axios.get(`http://localhost:3001/accounts/${id}`);

  return request;
};
