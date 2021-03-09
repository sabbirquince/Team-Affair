import React from "react";
import { Card, Button } from "react-bootstrap";
import "./team.css";

const Team = (props) => {
  const { team } = props;
  const { strTeam, strTeamBadge, strSport } = team;

  return (
    <div className="col-sm-12 col-md-6 col-lg-4 text-center d-flex justify-content-center align-items-center">
      <Card className="myCard" bg="secondary">
        <Card.Img className="myCardImg" variant="top" src={strTeamBadge} />

        <Card.Body>
          <Card.Title>{strTeam}</Card.Title>
          <Card.Text>Sport Type: {strSport}</Card.Text>
          <Button variant="primary">Explore </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Team;
