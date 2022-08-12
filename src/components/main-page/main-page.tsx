import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { createData } from "../utils/table-functions";
import { AccType } from "../global/types";

type MainPageProps = {
  accounts: AccType[];
};

export const MainPage: React.FC<MainPageProps> = ({ accounts }) => {
  const rows = accounts.map((acc: AccType) =>
    createData(
      acc._id,
      acc.name,
      acc.createdAt,
      acc.owner,
      <Link to={`/accounts/${acc._id}`}>View</Link>
    )
  );

  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Created On</TableCell>
            <TableCell align="left">Owner</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, id) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {id + 1}
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.createdAt}</TableCell>
              <TableCell align="left">{row.owner}</TableCell>
              <TableCell align="left">{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
