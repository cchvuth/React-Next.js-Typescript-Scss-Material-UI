import * as React from "react";
import { User } from "../interfaces/User";
import Link from "next/link";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./GitHubUserList.scss";

type Props = {
  users: User[];
};

const GithubUserList = ({ users }: Props) => (
  <div className="mg-20">
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <Link key={row.id} href={`/users/${row.login}`}>
              <TableRow>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.login}</TableCell>
              </TableRow>
            </Link>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
);

export default GithubUserList;
