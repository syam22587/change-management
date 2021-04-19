import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, Grid } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLongArrowAltDown,
  faLongArrowAltUp,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";

const TableBodyComponent = (props) => {
  const {
    sortData,
    sortedData,
    limit,
    sortOrder,
    loading,
    loadMore,
    errorState,
    classes,
  } = props;

  // console.log(" props ", props);
  return (
    <TableBody data-testid="user-table-body">
      {sortData(sortedData.slice(0, limit), sortOrder).map((row) => {
        return (
          <TableRow className="row-id" key={row.userId} data-testid={row.userId}>
            <TableCell component="th" scope="row">
              {row.date.format("yyyy-MM-DD")}
            </TableCell>
            <TableCell align="left">{row.userId}</TableCell>
            <TableCell align="left">{row.oldValue}</TableCell>
            <TableCell align="left">{row.newValue}</TableCell>
          </TableRow>
        );
      })}

      <TableRow>
        <TableCell colSpan="4" align="center">
          {loading ? (
            <React.Fragment>
              <FontAwesomeIcon
                icon={faCircleNotch}
                spin
                size="4x"
                color="blue"
              />
            </React.Fragment>
          ) : errorState ? (
            <React.Fragment>
              <p className={classes.pTag}>
                We had problems fetching your data. Please try again.
              </p>
              <Button
                color="primary"
                variant="contained"
                onClick={() => loadMore()}
              >
                Retry
              </Button>
            </React.Fragment>
          ) : (
            <Button
              color="primary"
              variant="contained"
              onClick={() => loadMore()}
              data-testid="load-more-btn"
            >
              Load More
            </Button>
          )}
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default TableBodyComponent;
