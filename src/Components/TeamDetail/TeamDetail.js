import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./teamDetail.css";
import male from "../../images/Photo/male.png";
import female from "../../images/Photo/female.png";
import twitter from "../../images/Icon/Twitter.png";
import youtube from "../../images/Icon/YouTube.png";
import facebook from "../../images/Icon/Facebook.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faFlag,
  faFutbol,
  faMars,
} from "@fortawesome/free-solid-svg-icons";

const TeamDetail = () => {
  let { id } = useParams();
  const [teamDetails, setTeamDetails] = useState([]);

  console.log(teamDetails);

  const {
    strTeam,
    intFormedYear,
    strCountry,
    strSport,
    strGender,
    strStadiumThumb,
    strTeamBadge,
    strDescriptionEN,
    strStadiumDescription,
    strYoutube,
    strFacebook,
    strTwitter,
  } = teamDetails[0] || {};

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTeamDetails(data.teams);
      });
  }, [id]);

  return (
    <div className="py-5 team_details">
      <section className="banner">
        <Card className="bg-dark text-white banner_card ">
          <Card.Img
            className="banner_image"
            src={strStadiumThumb}
            alt="Card image"
          />
          <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
            <img src={strTeamBadge} alt="" className="banner_card_img" />
          </Card.ImgOverlay>
        </Card>
      </section>

      <section className="container-xl team_box text-light bg-danger d-flex flex-column flex-sm-row justify-content-between align-items-center">
        <div>
          <h2 className="pl-3">{strTeam}</h2>

          <div className="team_info d-flex p-2">
            <div>
              <span className="d-block px-2 mb-1">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              <span className="d-block px-2 mb-1">
                <FontAwesomeIcon icon={faFlag} />
              </span>
              <span className="d-block px-2 mb-1">
                <FontAwesomeIcon icon={faFutbol} />
              </span>
              <span className="d-block px-2 mb-1">
                <FontAwesomeIcon icon={faMars} />
              </span>
            </div>

            <div className="team_info_left ml-3">
              <h6>Founded: {intFormedYear}</h6>
              <h6>Country: {strCountry}</h6>
              <h6>Sport: {strSport} </h6>
              <h6>Gender: {strGender} </h6>
            </div>
          </div>
        </div>

        <div className="team_photo">
          {strGender === "Male" && (
            <img src={male} alt="" className="team_image" />
          )}

          {strGender === "Female" && (
            <img src={female} alt="" className="team_image" />
          )}
        </div>
      </section>

      <section className="team_description text-light p-4 bg-dark container-xl mt-4">
        <p className="mb-5">{strDescriptionEN} </p>
        <p>{strStadiumDescription} </p>
      </section>

      <section className="social_link p-3 container-xl d-flex justify-content-center">
        <Link
          to={{
            pathname: `https://${strTwitter}`,
          }}
          target="_blank"
        >
          <img className="social_logo" src={twitter} alt="" />
        </Link>

        <Link
          to={{
            pathname: `https://${strFacebook}`,
          }}
          target="_blank"
        >
          <img className="social_logo" src={facebook} alt="" />
        </Link>

        <Link
          to={{
            pathname: `https://${strYoutube}`,
          }}
          target="_blank"
        >
          <img className="social_logo" src={youtube} alt="" />
        </Link>
      </section>
    </div>
  );
};

export default TeamDetail;
