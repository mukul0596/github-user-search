import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";

const UsersTable = (props) => {
    const { userResults } = props;
    return (
        <TableContainer
            sx={{ border: "1px solid #d1d3d4", borderRadius: "5px" }}
        >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ backgroundColor: "#f5f5f5", fontWeight: "600" }}>Avatar</TableCell>
                        <TableCell sx={{ backgroundColor: "#f5f5f5", fontWeight: "600" }} align="center">Username</TableCell>
                        <TableCell sx={{ backgroundColor: "#f5f5f5", fontWeight: "600" }} align="right">Profile</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {userResults.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>
                                <Avatar
                                    alt={user.login}
                                    src={user.avatar_url}
                                />
                            </TableCell>
                            <TableCell align="center">{user.login}</TableCell>
                            <TableCell align="right">
                                <Link target="_blank" href={user.html_url}>
                                    Click here
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UsersTable;
