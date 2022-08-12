import React, { useEffect } from "react";
import { 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@material-ui/core";
import { useState } from "react";
import { getAccountsById } from "../utils/request-functions";


type AccountPageType = {
  accountId: number;
};

export const AccountPage: React.FC<AccountPageType> = ({ accountId }) => {
  const [account, setAccount] = useState({
    _id: '',
    name: '',
    createdAt: '',
    owner: '',
    updatedAt: ''
  })

  useEffect(() => {
    getAccountsById(accountId).then(res => setAccount(res.data[0]))
  }, [accountId]);


  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Created On</TableCell>
            <TableCell align="left">Owner</TableCell>
            <TableCell align="left">UpdatedAt</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
              <TableCell component="th" scope="row">
                {account._id}
              </TableCell>
              <TableCell align="left">{account.name}</TableCell>
              <TableCell align="left">{account.createdAt}</TableCell>
              <TableCell align="left">{account.owner}</TableCell>
              <TableCell align="left">{account.updatedAt}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
