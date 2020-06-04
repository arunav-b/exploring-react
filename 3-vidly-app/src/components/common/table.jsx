import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = (props) => {
  const { columns, rows, sortColumn, onSort } = props;
  return (
    <table className="table">
      <TableHeader
        columns={columns}
        sortColumn={sortColumn}
        onSort={onSort}
      ></TableHeader>
      <TableBody rows={rows} columns={columns} />
    </table>
  );
};

export default Table;
