import React from "react";
import { useTable } from "react-table";

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default function index() {
  const data = React.useMemo(
    () => [
      {
        name: "Ayaan",
        age: 26
      },
      {
        name: "Ahana",
        age: 22
      },
      {
        name: "Peter",
        age: 40
      },
      {
        name: "Virat",
        age: 30
      },
      {
        name: "Rohit",
        age: 32
      },
      {
        name: "Dhoni",
        age: 37
      }
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name"
      },
      {
        Header: "Age",
        accessor: "age"
      }
    ],
    []
  );

  return <Table columns={columns} data={data} />;
}