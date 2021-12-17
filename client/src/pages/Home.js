import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import TeamBox from '../components/TeamBox';

export default function Home(props) {
  // let history = useHistory();
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getTeams();
  }, []);

  // const updateTeamName = (curTeamId, updatedName) => {
  //   let changedTeam = teams.find((team) => {
  //     return team._id === curTeamId;
  //   });
  //   let index = teams.map((team, i) => {
  //     if (team._id === curTeamId) {
  //       return i;
  //     }
  //   });
  //   changedTeam.team_Name = updatedName;
  //   setTeams(teams.splice(index, 1, changedTeam));
  // };

  const getTeams = async () => {
    const res = await axios.get(`http://localhost:3001/api/teams`);
    setTeams(res.data.teams);
  };

  return (
    <div>
      <div className="teamBoxesCont">
        {teams.map((team) => {
          {
            return (
              <TeamBox
                teams={teams}
                setTeams={setTeams}
                key={team._id}
                team_Name={team.team_Name}
                manager_Name={team.manager_Name}
                team_Id={team._id}
                // updateTeamName={updateTeamName}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
