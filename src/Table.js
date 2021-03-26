import { useTable, useSortBy, useFilters } from "react-table";
import { useState, useEffect } from "react";

const Table = ({ columns, data }) => {
  const [searchValue, setSearchInput] = useState("");
  const getSearchValue = (e) => {
    const value = e.target.value || "";
    // setFilter("col1", value);
    // setFilter("col1", value);
    setAllFilters([
      { id: "col1", value: value },
      { id: "col2", value: value }
    ]);
    setSearchInput(value);
  };
  // useEffect(() => {

  // },[])
  const {
    headerGroups,
    getTableProps,
    getTableBodyProps,
    prepareRow,
    rows,
    setFilter,
    setAllFilters
  } = useTable(
    {
      data,
      columns
    },
    useFilters,
    useSortBy
  );
  /**
   * table head will have
   * thead, tr, and th
   * to set role property in tr & th, tbody
   * ...headerGroup.getHeaderGroupProps()
   * ...column.getHeaderProps()
   * ...getTableBodyProps()
   * <thead>
   * headerGroups.map array
   *<tr ...headerGroup.getHeaderGroupProps()/>
   * headerGroup.headers.map
   * <th ...column.getHeaderProps()>column.render('Header') <th> */

  // console.log({ headerGroups });
  return (
    <>
      <input
        value={searchValue}
        onChange={getSearchValue}
        placeholder="search"
      />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroups) => (
            <tr {...headerGroups.getHeaderGroupProps()}>
              {headerGroups.headers.map((column) => {
                const { isSorted, isSortedDesc, getSortByToggleProps } = column;
                const extraClass = isSorted
                  ? isSortedDesc
                    ? "desc"
                    : "asc"
                  : "";
                return (
                  <th
                    className={extraClass}
                    {...column.getHeaderProps(getSortByToggleProps())}
                  >
                    {column.render("Header")}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
