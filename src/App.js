import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import routes from './route';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/karyawan'} className="nav-link">Karyawan</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/divisi'} className="nav-link">Divisi</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/jabatan'} className="nav-link">Jabatan</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          <h2>Home</h2> <br/>
          <Switch>
              {
                routes.map((route,idx) => {
                  return <Route exact path={route.path} component ={route.component} key={idx} />
                })
              }

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;