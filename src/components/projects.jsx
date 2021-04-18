import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import { Grid, Typography } from "@material-ui/core";
import moment from "moment";
import TableHeadComponent from "../common/tableHeadComponent";
import TableBodyComponent from "../common/tableBodyComponent";
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

const ProjectComponent = () => {
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
          <Typography variant="h3" gutterBottom>
            Project's Change Management Report
          </Typography>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHeadComponent
                changeSortOrder={changeSortOrder}
                sortOrder={sortOrder}
              />

              <TableBodyComponent
                sortData={sortData}
                sortedData={sortedProjects}
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

export default ProjectComponent;
