import React from "react";

const TableHeadComponent = (props) => {
  return (
    <TableHead>
      <TableRow className="table-header">
        <TableCell align="left" onClick={() => changeSortOrder(sortOrder)}>
          Date
          <FontAwesomeIcon
            icon={sortOrder === "desc" ? faLongArrowAltDown : faLongArrowAltUp}
          />
        </TableCell>
        <TableCell align="left">Poject ID</TableCell>
        <TableCell align="left">Old value</TableCell>
        <TableCell align="left">New value</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeadComponent;
