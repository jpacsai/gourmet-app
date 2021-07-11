import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Page from './components/Page/Page';
import Dishes from './pages/dishes';
import Menus from './pages/menus';

import './styles/App.scss';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App my-blueprint-theme">
        <ul>
          <li>
            <Link to="/">Kezdőlap</Link>
          </li>
          <li>
            <Link to="/fogasok">Fogások</Link>
          </li>
          <li>
            <Link to="/menuk">Menüsorok</Link>
          </li>
        </ul>
        <hr />

        <Switch>
          <Route exact path="/">
            <Page title="Kezdőlap" />
          </Route>
          <Route path="/fogasok">
            <Dishes />
          </Route>
          <Route path="/menuk">
            <Menus />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
