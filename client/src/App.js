import logo from './bball.png';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Nav from './components/Nav';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Home />
      {/* <Switch>
        <Route exact path="/" component={(props) => <Home {...props} />} />
        <Route exact path="/about" component={About} />
      </Switch> */}
    </div>
  );
}

export default App;
