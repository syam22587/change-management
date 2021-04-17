import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, Grid } from "@material-ui/core";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltDown,
  faLongArrowAltUp,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";

import "./../common/css/style.css";
const debug = require("debug")("server:debug");

let utils = require("../utils/sort");

const projectData = [
  {
    date: moment("2022-06-03"),
    userId: "dThhsquugcNuScEjo",
    oldValue: "Windows 98",
    newValue: "Windows 10",
  },
  {
    date: moment("2018-06-04"),
    userId: "53ZPA42pd5ZfJpCAa",
    oldValue: "Unix",
    newValue: "Linux",
  },
  {
    date: moment("2018-06-05"),
    userId: "Xcm2FRCQZZB2Fb37h",
    oldValue: "C Language",
    newValue: "Java Language",
  },
  {
    date: moment("2018-06-05"),
    userId: "dThhsquugcNuScEjo",
    oldValue: "Shellscript",
    newValue: "Python",
  },
  {
    date: moment("2018-06-04"),
    userId: "53ZPA42pd5ZfJpCAa",
    oldValue: "Jquery",
    newValue: "React",
  },
  {
    date: moment("2018-06-08"),
    userId: "Xcm2FRCQZZB2Fb37h",
    oldValue: "XML Content",
    newValue: "JSON Content",
  },
  {
    date: moment("2016-07-03"),
    userId: "ikemv5MHiK6MHbMkS",
    oldValue: "SOAP",
    newValue: "REST",
  },
  {
    date: moment("2011-09-03"),
    userId: "8",
    oldValue: ".NET Stack",
    newValue: "Java Stack",
  },
  {
    date: moment("2009-12-03"),
    userId: "9",
    oldValue: "In house Data center",
    newValue: "Cloud Native",
  },
  {
    date: moment("2015-08-23"),
    userId: "10",
    oldValue: "Desktop Apps",
    newValue: "Web Apps",
  },
  {
    date: moment("2013-06-03"),
    userId: "11",
    oldValue: "Big Data",
    newValue: "Small Data",
  },
  {
    date: moment("2017-06-28"),
    userId: "12",
    oldValue: "Manual Testing",
    newValue: "Automation Testing",
  },
];

// const useStyles = makeStyles({});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  table: {
    minWidth: 650,
  },
  headerRow: {
    fontWeight: "bold",
  },
  pTag: {
    color: "red",
  },
}));

// const sortedProjects = (users) => {
//   return utils.sortItems(users, "desc");
// };

const sortedProjects = utils.sortItems(projectData, "desc");

const sortData = (projects, sortOrder) => {
  return utils.sortItems(projects, sortOrder);
};

const UsersComponent = () => {
  const classes = useStyles();

  const [limit, setLimit] = useState(3);
  const [sortOrder, setSortOrder] = useState("desc");
  const [loading, setLoading] = useState(false);
  const [isLoadingAllowed, setIsLoadingAllowed] = useState(true);
  const [errorState, setErrorState] = useState(false);

  debug(" limit , sortOrder , loading , isLoadingAllowed , errorState : ");

  debug(limit, sortOrder, loading, isLoadingAllowed, errorState);
  // debug(" sorted datea", sortedProjects(projectData));

  const changeSortOrder = (sortOrderKey) => {
    debug(
      "receive sort order ",
      sortOrder,
      sortOrderKey === "desc",
      typeof sortOrderKey
    );
    sortOrderKey === "desc" ? setSortOrder("asc") : setSortOrder("desc");
  };

  const loadMore = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (isLoadingAllowed) {
        setLimit(limit + 3);
        setErrorState(false);
      } else {
        setErrorState(true);
      }
      setIsLoadingAllowed(isLoadingAllowed ? false : true);
    }, 1500);
  };

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={10}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow className="table-header">
                  <TableCell
                    align="left"
                    onClick={() => changeSortOrder(sortOrder)}
                  >
                    Date
                    <FontAwesomeIcon
                      icon={
                        sortOrder === "desc"
                          ? faLongArrowAltDown
                          : faLongArrowAltUp
                      }
                    />
                  </TableCell>
                  <TableCell align="left">Poject ID</TableCell>
                  <TableCell align="left">Old value</TableCell>
                  <TableCell align="left">New value</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {sortData(sortedProjects.slice(0, limit), sortOrder).map(
                  (row, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">
                          {row.date.format("yyyy-MM-DD")}
                        </TableCell>
                        <TableCell align="left">{row.userId}</TableCell>
                        <TableCell align="left">{row.oldValue}</TableCell>
                        <TableCell align="left">{row.newValue}</TableCell>
                      </TableRow>
                    );
                  }
                )}

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
                      >
                        Load More
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
};

export default UsersComponent;
