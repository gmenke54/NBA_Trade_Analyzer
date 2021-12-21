import logo from './bball.png';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Nav from './components/Nav';
import About from './pages/About';
import PlayerDetails from './pages/PlayerDetails';
import MyTeam from './pages/MyTeam';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <a href="http://localhost:3000/">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <Nav {...props} />
      </header>
      <Switch>
        <Route exact path="/" component={(props) => <MyTeam {...props} />} />
        <Route exact path="/trade" component={(props) => <Home {...props} />} />
        <Route exact path="/about" component={About} />
        <Route
          path="/players/details/:name"
          component={(props) => <PlayerDetails {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
