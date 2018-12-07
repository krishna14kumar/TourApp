import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import AddPlan from './AddPlan.js';
import ListOfPlans from './ListOfPlans.js';

class App extends Component {
  render() {
    return (

      <Router>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-1">
              <div className="sideNavbar">
                <NavLink exact to="/" ><i className="fa fa-home home_button"></i></NavLink>
                <NavLink to="/add" ><i className="fa fa-calendar add_plan"></i></NavLink>
                <NavLink to="/list" ><i className="fa fa-table list_plan"></i></NavLink>
              </div>
            </div>
            <div className="col-lg-10">
              <div className="body-content-wrap">
                <center>
                  <Route exact path="/" component={Home} />
                </center>
                <Route path="/add" component={AddPlan} />
                <Route path="/list" component={ListOfPlans} />
              </div>
            </div>
          </div>
        </div>
      </Router>

    );
  }
}

export default App;
