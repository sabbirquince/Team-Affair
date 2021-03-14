import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Header from "../Header/Header";
import TeamCard from "../Team/TeamCard";

const Main = (props) => {
  const searchValue = props.searchValue;
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchValue}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setTeams(data.teams));
  }, [searchValue]);

  useEffect(() => {
    const url =
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setTeams(data.teams));
  }, []);

  return (
    <div>
      <Header />

      {teams?.length === 0 ? (
        <div className="spinner d-flex justify-content-center p-5 m-5">
          <Spinner className="p-4" animation="grow" variant="light" />
        </div>
      ) : (
        <div className="container-xl">
          <div className="row mt-4">
            {teams?.map((team) => (
              <TeamCard key={team.idTeam} team={team} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
