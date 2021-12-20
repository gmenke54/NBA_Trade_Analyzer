import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import TeamBox from '../components/TeamBox';
import AddTeam from '../components/AddTeam';
import TradeResults from '../components/TradeResults';

export default function Home(props) {
  // let history = useHistory();
  const [teams, setTeams] = useState([]);
  const [teamsLoaded, setTeamsLoaded] = useState(false);
  const [renderResults, setRenderResults] = useState(false);

  useEffect(() => {
    getTeams();
  }, [renderResults]);

  const analyze = () => {
    setRenderResults(true);
  };

  const reload = () => {
    setRenderResults(false);
  };

  const getTeams = async () => {
    const res = await axios.get(`http://localhost:3001/api/teams`);
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
        {teams.length === 1 ? (
          <div className="teamBoxesCont">
            <TeamBox
              {...props}
              teams={teams}
              setTeams={setTeams}
              key={teams[0]._id}
              team_Name={teams[0].team_Name}
              manager_Name={teams[0].manager_Name}
              team_Id={teams[0]._id}
            />
            <AddTeam
              teams={teams}
              setTeams={setTeams}
              setTeamsLoaded={setTeamsLoaded}
            />
          </div>
        ) : (
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
              />
              <TeamBox
                {...props}
                teams={teams}
                setTeams={setTeams}
                key={teams[1]._id}
                team_Name={teams[1].team_Name}
                manager_Name={teams[1].manager_Name}
                team_Id={teams[1]._id}
              />
            </div>
            {renderResults === true ? (
              <div>
                <button onClick={reload}>Back</button>
              </div>
            ) : (
              <div>
                <button onClick={analyze}>Analyze Trade</button>
              </div>
            )}
            {renderResults === true ? (
              <div>
                <TradeResults teamA_id={teams[0]._id} teamB_id={teams[1]._id} />
              </div>
            ) : null}
          </div>
        )}
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
        <AddTeam
          teams={teams}
          setTeams={setTeams}
          setTeamsLoaded={setTeamsLoaded}
        />
      </div>
    );
  }
}
