import React, { useEffect, useState } from "react";
import { DataStore, Predicates, SortDirection } from "@aws-amplify/datastore";
import { Course } from "../models";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CssBaseline,
  Grid,
  Typography
} from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  grid: {
    flexGrow: 1,
    padding: "30px"
  },
  link: {
    textDecoration: "none"
  },
  avatar: {
    background: theme.palette.secondary.main
  }
}));

function Courses() {
  const classes = useStyles();
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    getCourses();
  }, []);
  async function getCourses() {
    const models = await DataStore.query(Course, Predicates.ALL, {
      sort: (s) => s.createdAt(SortDirection.DESCENDING)
    });
    setCourses(models);
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.grid}>
        <Grid container spacing={3}>
          {courses.map((course) => (
            <Grid item xs={6} sm={3}>
              <Card className={classes.root}>
                <Link to={`/course/${course.id}`} className={classes.link}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        {course.createdBy.charAt(0).toUpperCase()}
                      </Avatar>
                    }
                    title={course.title}
                    subheader={"By " + course.createdBy}
                  />
                </Link>
                <img
                  src="https://source.unsplash.com/collection/4676376/"
                  width="auto"
                  height="200px"
                  alt="code"
                />

                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {course.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default Courses;
