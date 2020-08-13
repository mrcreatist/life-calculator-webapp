import React from 'react';
import ReactDOM from 'react-dom';
import 'fontsource-roboto';
import './index.css';
import List from './pages/list';
import About from './pages/about';
import AddPerson from './pages/add-person';
import Welcome from './pages/welcome';
import Detail from './pages/detail';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createBrowserHistory as createHistory } from 'history';

const history = createHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Switch>
        <Route exact path="/list" component={List} />
        <Route exact path="/add-person" component={AddPerson} />
        <Route path="/detail/:id" component={Detail} />
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Welcome} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
