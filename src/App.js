import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";

// import BottomNavigation from "@material-ui/core/BottomNavigation";
// import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import MapIcon from "@material-ui/icons/Map";
import { makeStyles } from "@material-ui/core/styles";

import ShowMap from "./components/ShowMap";
import InfoBoard from "./components/InfoBoard";

export default App;

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
  },
}));

function App() {
  const classes = useStyles();
  const [json, setJson] = useState([]);
  const [listJson, setListJson] = useState([]);

  let config = require("./config.json");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(config.data_api, {
        mode: "cors",
      })
        .then((response) => response.json())
        .then((jsonData) => {
          return jsonData;
        })
        .catch((error) => {
          return [];
        });
      setJson(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(config.list_data_api, {
        mode: "cors",
      })
        .then((response) => response.json())
        .then((jsonData) => {
          return jsonData;
        })
        .catch((error) => {
          return [];
        });
      setListJson(data);
    };
    fetchData();
  }, []);

  // console.log(json);
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={7} md={8}>
        <ShowMap data={json} />
      </Grid>
      <Grid item xs={12} sm={5} md={4} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <InfoBoard data={listJson} />
        </div>
      </Grid>
    </Grid>
  );
}
