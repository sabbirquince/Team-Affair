import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Header from "../Header/Header";
import TeamCard from "../Team/TeamCard";

const Main = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  const spinner = (
    <div className="d-flex justify-content-center align-items-center p-5 m-5">
      <Spinner variant="light" animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );

  useEffect(() => {
    const url =
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTeams(data.teams);
        setLoading(!loading);
      });
  }, []);

  return (
    <div>
      <Header />
      {loading && spinner}

      <div className="container-xl">
        <div className="row mt-4">
          {teams.map((team) => (
            <TeamCard key={team.idTeam} team={team} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
