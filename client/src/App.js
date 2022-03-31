import './App.css';
import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Nav from './components/Nav';
import About from './pages/About';
import PlayerDetails from './pages/PlayerDetails';
import MyTeam from './pages/MyTeam';
import Matchup from './pages/Matchup';

function App(props) {
  return (
    <div className="App">
      <Nav {...props} />
      <Switch>
        <Route exact path="/" component={(props) => <MyTeam {...props} />} />
        <Route exact path="/trade" component={(props) => <Home {...props} />} />
        <Route exact path="/about" component={About} />
        <Route
          path="/players/details/:name"
          component={(props) => <PlayerDetails {...props} />}
        />
        <Route
          exact
          path="/matchup"
          component={(props) => <Matchup {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
