import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TeamBox from '../components/TeamBox';
import AddTeam from '../components/AddTeam';

const MyTeam = (props) => {
  const [teams, setTeams] = useState([]);
  const [teamsLoaded, setTeamsLoaded] = useState(false);
  const [renderResults, setRenderResults] = useState(false);

  useEffect(() => {
    getTeams();
  }, []);

  const getTeams = async () => {
    const res = await axios.get(`http://localhost:3001/api/teams`);
    console.log(res.data.teams);
    if (res.data.teams.length >= 1) {
      setTeams(res.data.teams);
      setTeamsLoaded(true);
    } else {
      setTeamsLoaded(false);
    }
  };

  if (teamsLoaded === true) {
    return (
      <div>
        <div className="teamBoxesCont">
          <TeamBox
            {...props}
            teams={teams}
            setTeams={setTeams}
            key={teams[0]._id}
            team_Name={teams[0].team_Name}
            manager_Name={teams[0].manager_Name}
            team_Id={teams[0]._id}
            setRenderResults={setRenderResults}
            displayTitle={true}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="teamBoxesCont">
        <AddTeam
          teams={teams}
          setTeams={setTeams}
          setTeamsLoaded={setTeamsLoaded}
        />
      </div>
    );
  }
};

export default MyTeam;
