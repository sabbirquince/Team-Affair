import React from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import "./teamCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const TeamCard = (props) => {
  const { team } = props;
  const { strTeam, strTeamBadge, strSport, idTeam } = team || {};

  let history = useHistory();

  const handleDetails = (idTeam) => {
    history.push(`/team/${idTeam}`);
  };

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 text-center d-flex justify-content-center align-items-center">
      <Card className="myCard shadow-sm text-light">
        <Card.Img className="myCardImg" variant="top" src={strTeamBadge} />

        <Card.Body>
          <Card.Title>{strTeam}</Card.Title>
          <Card.Text>Sport: {strSport}</Card.Text>
          <Button
            className="myCardButton"
            onClick={() => handleDetails(idTeam)}
            variant="outline-info"
          >
            Explore
            <span className="px-1">
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </span>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TeamCard;
