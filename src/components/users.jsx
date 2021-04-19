import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, Grid, Typography } from "@material-ui/core";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltDown,
  faLongArrowAltUp,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";

import "./../common/css/style.css";
import TableHeadComponent from "../common/tableHeadComponent";
import TableBodyComponent from "../common/tableBodyComponent";
const debug = require("debug")("server:debug");

let utils = require("../utils/sort");

const userData = [
  {
    date: moment("2022-06-03"),
    userId: "dThhsquugcNuScEjo111",
    oldValue: "Windows 98",
    newValue: "Windows 10",
  },
  {
    date: moment("2018-06-04"),
    userId: "53ZPA42pd5ZfJpCAa2",
    oldValue: "Unix",
    newValue: "Linux",
  },
  {
    date: moment("2018-06-05"),
    userId: "Xcm2FRCQZZB2Fb373",
    oldValue: "C Language",
    newValue: "Java Language",
  },
  {
    date: moment("2018-06-05"),
    userId: "dThhsquugcNuScEjo3",
    oldValue: "Shellscript",
    newValue: "Python",
  },
  {
    date: moment("2018-06-04"),
    userId: "53ZPA42pd5ZfJpCA23a",
    oldValue: "Jquery",
    newValue: "React",
  },
  {
    date: moment("2018-06-08"),
    userId: "Xcm2FRCQZZB2Fb37h1",
    oldValue: "XML Content",
    newValue: "JSON Content",
  },
  {
    date: moment("2016-07-03"),
    userId: "ikemv5MHiK6MHbMkS1",
    oldValue: "SOAP",
    newValue: "REST",
  },
  {
    date: moment("2011-09-03"),
    userId: "ikemv5MHiK6MHbMkS123232",
    oldValue: ".NET Stack",
    newValue: "Java Stack",
  },
  {
    date: moment("2009-12-03"),
    userId: "53ZPA42pd5ZfJpCA23aliuou",
    oldValue: "In house Data center",
    newValue: "Cloud Native",
  },
  {
    date: moment("2015-08-23"),
    userId: "10Xcm2FRCQZZB2Fb37h1",
    oldValue: "Desktop Apps",
    newValue: "Web Apps",
  },
  {
    date: moment("2013-06-03"),
    userId: "Xcm2FRCQZZB2Fb37h13fdg11",
    oldValue: "Big Data",
    newValue: "Small Data",
  },
  {
    date: moment("2017-06-28"),
    userId: "1Xcm2FRCQZZB2Fb37h12",
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

// const sortedUsers = (users) => {
//   return utils.sortItems(users, "desc");
// };

const sortedUsers = utils.sortItems(userData, "desc");

const sortData = (users, sortOrder) => {
  return utils.sortItems(users, sortOrder);
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
  // debug(" sorted datea", sortedUsers(userData));

  const changeSortOrder = (sortOrderKey) => {
    debug(
      "receive sort order ",
      sortOrder,
      sortOrderKey === "desc",
      typeof sortOrderKey
    );
    sortOrderKey === "desc" ? setSortOrder("asc") : setSortOrder("desc");
  };

  const loadMore = async () => {
    setLoading(true);

    await setTimeout(() => {
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
    <div className={classes.root} data-testid="user-component-1">
      <Grid container justify="center">
        <Grid item xs={10}>
          <Typography variant="h3" gutterBottom data-testid="titleBar">
            User's Change Management Report
          </Typography>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHeadComponent
                changeSortOrder={changeSortOrder}
                sortOrder={sortOrder}
              />

              <TableBodyComponent
                sortData={sortData}
                sortedData={sortedUsers}
                limit={limit}
                sortOrder={sortOrder}
                loading={loading}
                loadMore={loadMore}
                errorState={errorState}
                classes={classes}
              />
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
};

export default UsersComponent;
