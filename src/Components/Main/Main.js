import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import TeamCard from "../Team/TeamCard";

const Main = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const url =
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setTeams(data.teams));
  }, []);

  console.log(teams);

  return (
    <div>
      <Header />

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
