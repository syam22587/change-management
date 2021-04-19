import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltDown,
  faLongArrowAltUp,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const TableHeadComponent = (props) => {
  const { changeSortOrder, sortOrder } = props;
  return (
    <TableHead>
      <TableRow className="table-header" data-testid="table-header">
        <TableCell align="left" data-testid="date-sort-test" onClick={() => changeSortOrder(sortOrder)}>
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
