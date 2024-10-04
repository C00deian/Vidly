import React from "react";
import TableHeader from "../TableHeader";
import TableBody from "../TableBody";

function Table(props) {
  const { columns, onSort, sortColumn, data } = props;
  return (
    <table className="table">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody data={data} columns={columns} />
    </table>
  );
}

export default Table;
