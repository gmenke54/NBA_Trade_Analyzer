import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TeamBox from '../components/TeamBox';
import AddTeam from '../components/AddTeam';
import TradeResults from '../components/TradeResults';
import '../css/Home.css';
import '../css/TradeResults.css';

export default function Home(props) {
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

  let btnClassPts = ['catBtn', `${pts}`];
  btnClassPts = btnClassPts.join(' ');

  let btnFgp = ['catBtn', `${fgp}`];
  btnFgp = btnFgp.join(' ');

  let btnFtp = ['catBtn', `${ftp}`];
  btnFtp = btnFtp.join(' ');

  let btnFg3m = ['catBtn', `${fg3m}`];
  btnFg3m = btnFg3m.join(' ');

  let btnReb = ['catBtn', `${reb}`];
  btnReb = btnReb.join(' ');

  let btnAst = ['catBtn', `${ast}`];
  btnAst = btnAst.join(' ');

  let btnSt = ['catBtn', `${st}`];
  btnSt = btnSt.join(' ');

  let btnBlk = ['catBtn', `${blk}`];
  btnBlk = btnBlk.join(' ');

  let btnTurnOver = ['catBtn', `${turnOver}`];
  btnTurnOver = btnTurnOver.join(' ');

  let btnFtm = ['catBtn', `${ftm}`];
  btnFtm = btnFtm.join(' ');

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
                <div className="backBtn" onClick={reload}>
                  Back
                </div>
              </div>
            ) : (
              <div className="trade-sec">
                <div className="catBtnBar">
                  <div className={btnClassPts} onClick={puntPts}>
                    PTS
                  </div>
                  <div className={btnFgp} onClick={puntFgp}>
                    FG%
                  </div>
                  <div className={btnFtp} onClick={puntFtp}>
                    FT%
                  </div>
                  <div className={btnFg3m} onClick={puntFg3m}>
                    3PTM
                  </div>
                  <div className={btnReb} onClick={puntReb}>
                    REB
                  </div>
                  <div className={btnAst} onClick={puntAst}>
                    AST
                  </div>
                  <div className={btnSt} onClick={puntSt}>
                    STL
                  </div>
                  <div className={btnBlk} onClick={puntBlk}>
                    BLK
                  </div>
                  <div className={btnTurnOver} onClick={puntTurnOver}>
                    TO
                  </div>
                  <div className={btnFtm} onClick={puntFtm}>
                    FTM
                  </div>
                </div>
                <div className="analyzeBtn" onClick={analyze}>
                  Analyze Trade
                </div>
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
