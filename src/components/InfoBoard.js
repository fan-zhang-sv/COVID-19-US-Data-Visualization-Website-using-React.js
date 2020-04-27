import React, { Fragment } from "react";

import Box from "@material-ui/core/Box";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import CountryBoard from "./CountryBoard";
// import data from "../data/data.json";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="left">
      {"Copyright © "}
      <Link color="inherit" href="/">
        COVID-19 Info
      </Link>{" "}
      {new Date().getFullYear()}
      {". Made by "}
      <Link color="inherit" href="https://fanzhang.pro">
        Fan Zhang.
      </Link>{" "}
      <br />
      {"Data: "}
      <Link color="inherit" href="https://github.com/CSSEGISandData/COVID-19">
        Johns Hopkins University.
      </Link>
    </Typography>
  );
}

export default class InfoBoard extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: [],
  //   };
  // }

  // componentDidMount() {
  //   fetch(
  //     "https://cors-anywhere.herokuapp.com/http://129.146.43.239:5000/data",
  //     { mode: "cors" }
  //   )
  //     .then((response) => response.json())
  //     .then((jsonData) => {
  //       console.log(jsonData);
  //       this.setState({
  //         data: jsonData,
  //       });
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  render() {
    return (
      <Fragment>
        <Container>
          <h1>COVID-19 Info</h1>
          <p>Latest US statewise data:</p>
        </Container>
        <div
          style={{
            height: "calc(100vh - 300px)",
            overflow: "scroll",
          }}
        >
          {this.props.data.map((value, idx) => (
            <CountryBoard
              key={idx}
              state={value.state}
              confirmed={value.confirmed}
              deaths={value.deaths}
              recovered={"Unprovided"}
            />
          ))}
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Fragment>
    );
  }
}
