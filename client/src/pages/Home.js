import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import TeamBox from '../components/TeamBox';
import AddTeam from '../components/AddTeam';
import TradeResults from '../components/TradeResults';
import '../css/Home.css';

export default function Home(props) {
  // let history = useHistory();
  const [teams, setTeams] = useState([]);
  const [teamsLoaded, setTeamsLoaded] = useState(false);
  const [renderResults, setRenderResults] = useState(false);
  const [pts, setPts] = useState('true');
  const [fgp, setFgp] = useState('true');
  const [ftp, setFtp] = useState('true');
  const [ftm, setFtm] = useState('false');
  const [fg3m, setFg3m] = useState('true');
  const [reb, setReb] = useState('true');
  const [ast, setAst] = useState('true');
  const [st, setSt] = useState('true');
  const [blk, setBlk] = useState('true');
  const [turnOver, setTurnOver] = useState('true');

  const puntPts = () => {
    pts === 'true' ? setPts('false') : setPts('true');
  };
  const puntFgp = () => {
    fgp === 'true' ? setFgp('false') : setFgp('true');
  };
  const puntFtp = () => {
    ftp === 'true' ? setFtp('false') : setFtp('true');
  };
  const puntFg3m = () => {
    fg3m === 'true' ? setFg3m('false') : setFg3m('true');
  };
  const puntReb = () => {
    reb === 'true' ? setReb('false') : setReb('true');
  };
  const puntAst = () => {
    ast === 'true' ? setAst('false') : setAst('true');
  };
  const puntSt = () => {
    st === 'true' ? setSt('false') : setSt('true');
  };
  const puntBlk = () => {
    blk === 'true' ? setBlk('false') : setBlk('true');
  };
  const puntFtm = () => {
    ftm === 'true' ? setFtm('false') : setFtm('true');
  };
  const puntTurnOver = () => {
    turnOver === 'true' ? setTurnOver('false') : setTurnOver('true');
  };

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
              <TeamBox
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
              <TeamBox
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
            {renderResults === true ? (
              <div>
                <button onClick={reload}>Back</button>
              </div>
            ) : (
              <div className="trade-sec">
                <div className="catBtnBar">
                  <button className={pts} onClick={puntPts}>
                    PTS
                  </button>
                  <button className={fgp} onClick={puntFgp}>
                    FG%
                  </button>
                  <button className={ftp} onClick={puntFtp}>
                    FT%
                  </button>
                  <button className={fg3m} onClick={puntFg3m}>
                    3PTM
                  </button>
                  <button className={reb} onClick={puntReb}>
                    REB
                  </button>
                  <button className={ast} onClick={puntAst}>
                    AST
                  </button>
                  <button className={st} onClick={puntSt}>
                    STL
                  </button>
                  <button className={blk} onClick={puntBlk}>
                    BLK
                  </button>
                  <button className={turnOver} onClick={puntTurnOver}>
                    TO
                  </button>
                  <button className={ftm} onClick={puntFtm}>
                    FTM
                  </button>
                </div>
                <button onClick={analyze}>Analyze Trade</button>
              </div>
            )}
            {renderResults === true ? (
              <div className="res-cont">
                <TradeResults
                  teamA_id={teams[0]._id}
                  teamB_id={teams[1]._id}
                  teamA_name={teams[0].team_Name}
                  teamB_name={teams[1].team_Name}
                  pts={pts}
                  fgp={fgp}
                  ftp={ftp}
                  fg3m={fg3m}
                  reb={reb}
                  ast={ast}
                  st={st}
                  blk={blk}
                  ftm={ftm}
                  turnOver={turnOver}
                />
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
