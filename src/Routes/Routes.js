import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import Teach from "../components/Teach"
import Profile from '../components/Profile'
import Explore from "../components/Explore";
import ProfileDetails from '../components/ProfileDetails'
import CreateCourse from '../components/CreateCourse'
function Routes() {
  return (
    <div>
        <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/explore' component={Explore} />
            <Route exact path='/teach' component={Teach} />
            <Route exact path='/profile' component={Profile} />
            <Route path='/profile/:id' component={ProfileDetails} />
            <Route exact path='/course/new' component={CreateCourse} />
        </Switch>
    </div>
  );
}

export default Routes;
