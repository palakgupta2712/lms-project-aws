import React from "react";
import { Switch, Route } from "react-router-dom";
import Courses from "../components/Courses";
import Home from "../components/Home";
import Posts from "../components/Posts";
import Teach from "../components/Teach"
function Routes() {
  return (
    <div>
        <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/posts' component={Posts} />
            <Route exact path='/courses' component={Courses} />
            <Route exact path='/teach' component={Teach} />
        </Switch>
    </div>
  );
}

export default Routes;
