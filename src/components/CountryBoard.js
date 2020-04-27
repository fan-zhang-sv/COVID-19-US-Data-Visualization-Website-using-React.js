import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Card from "@material-ui/core/Card";
// import Grid from "@material-ui/core/Grid";
// import CardContent from "@material-ui/core/CardContent";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CountryBoard({
  key,
  state,
  confirmed,
  deaths,
  recovered,
}) {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth();
  let year = newDate.getFullYear();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let today = monthNames[month] + " " + date + ", " + year;

  return (
    <>
      <Card bg="light" id={key}>
        <Card.Header>{today}</Card.Header>
        <Card.Body>
          <Card.Title>{state}</Card.Title>
          <Card.Text>
            <Container>
              <Row>
                <Col>Confirmed</Col>
                <Col>Deaths</Col>
                <Col>Recovered</Col>
              </Row>
              <Row>
                <Col>{confirmed}</Col>
                <Col>{deaths}</Col>
                <Col>{recovered}</Col>
              </Row>
            </Container>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}
