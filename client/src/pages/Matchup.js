import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ScoreBoard from '../components/ScoreBoard';
import AddTeam from '../components/AddTeam';
import '../css/Home.css';
import '../css/TradeResults.css';
import { BASE_URL } from '../globals';

export default function Home(props) {
  const [teams, setTeams] = useState([]);
  const [teamsLoaded, setTeamsLoaded] = useState(false);
  const [renderResults, setRenderResults] = useState(false);

  useEffect(() => {
    getTeams();
  }, [renderResults]);

  const getTeams = async () => {
    const res = await axios.get(`${BASE_URL}/teams`);
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
            <ScoreBoard
              {...props}
              teams={teams}
              setTeams={setTeams}
              key={teams[0]._id}
              team_Name={teams[0].team_Name}
              manager_Name={teams[0].manager_Name}
              team_Id={teams[0]._id}
              displayTitle={false}
            />
            <AddTeam
              teams={teams}
              setTeams={setTeams}
              setTeamsLoaded={setTeamsLoaded}
            />
          </div>
        ) : (
          <div className="body">
            <div className="teamBoxesCont">
              <ScoreBoard
                {...props}
                teams={teams}
                setTeams={setTeams}
                key={teams[0]._id}
                team_Name={teams[0].team_Name}
                manager_Name={teams[0].manager_Name}
                team_Id={teams[0]._id}
                setRenderResults={setRenderResults}
                displayTitle={false}
              />
              <ScoreBoard
                {...props}
                teams={teams}
                setTeams={setTeams}
                key={teams[1]._id}
                team_Name={teams[1].team_Name}
                manager_Name={teams[1].manager_Name}
                team_Id={teams[1]._id}
                setRenderResults={setRenderResults}
                displayTitle={false}
              />
            </div>
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
