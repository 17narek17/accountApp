import React, { useEffect } from "react";
import { Table, TableBody, TableContainer, TableHead } from "@material-ui/core";
import { useState } from "react";
import { TablePart } from "../main-page/common/table/table-part";
import { accountTableHead } from "../utils/teble-consants";
import { useParams } from "react-router";
import { getAccountsById } from "../utils/request-functions";
import { AccType } from "../global/types";

export const AccountPage: React.FC = () => {
  const [account, setAccount] = useState<AccType[] | null>(null);

  const { id } = useParams();

  useEffect(() => {
    try {
      if (id) getAccountsById(id, setAccount);
    } catch (err) {
      console.error(err);
    }
  }, [id]);

  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TablePart cells={accountTableHead} />
        </TableHead>
        <TableBody>
          {account && <TablePart cells={Object.values(account[0])} />}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
