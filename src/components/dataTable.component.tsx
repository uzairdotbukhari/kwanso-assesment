import { FC } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CircularProgress } from "@mui/material";

const DataTable: FC<IDataTableProps> = ({ columns, rowData, isLoading }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="custom table">
        <TableHead className="bg-gray-300">
          <TableRow>
            {columns.map((column) => (
              <TableCell width={column.width} key={column.key}>{column.title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell>
                <CircularProgress color="primary" />
              </TableCell>
            </TableRow>
          ) : rowData.length > 0 ? (
            rowData.map((row, index) => (
              <TableRow key={index}>
                {columns.map((column) => (
                  <TableCell key={column.key}>
                    {row[column.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ): <TableRow><TableCell>No Record Found!</TableCell></TableRow> }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
