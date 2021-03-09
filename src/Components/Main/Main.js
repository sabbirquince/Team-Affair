import React, { useEffect, useState } from "react";
import Team from "../Team/Team";

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
    <div className="container-xl mt-5">
      <div className="row">
        {teams.map((team) => (
          <Team team={team} />
        ))}
      </div>
    </div>
  );
};

export default Main;
