import React, { useContext } from "react";
import { Table, TableBody, TableContainer, TableHead } from "@material-ui/core";
import { TablePart } from "./common/table/table-part";
import { mainTableHead } from "../utils/teble-consants";
import { AccountsContext } from "../context/account-context";
import { nanoid } from "nanoid";

export const MainPage: React.FC = () => {
  const accounts = useContext(AccountsContext);

  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TablePart cells={mainTableHead} />
        </TableHead>
        <TableBody>
          {accounts?.map((row) => (
            <TablePart cells={Object.values(row)} key={nanoid()} withView />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
