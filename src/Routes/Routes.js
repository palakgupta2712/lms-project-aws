import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import Teach from "../components/Teach"
import Explore from "../components/Explore";
import NewCourse from "../course/NewCourse";
import Courses from "../course/Courses";
import CourseDetail from "../course/CourseDetail";
import LandingPage from '../components/LandingPage'
import SignIn from "../auth/SignIn";
function Routes() {
  return (
    <div>
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/explore' component={Explore} />
            <Route exact path='/teach' component={Teach} />
  
            <Route exact path='/teach/course/new' component={NewCourse} />
            <Route exact path='/courses' component={Courses} />
            <Route exact path='/course/:id' component={CourseDetail} />

            <Route exact path='/sign-in' component={SignIn} />
        </Switch>
    </div>
  );
}

export default Routes;
