import React, { useEffect, useState } from "react";
import { DataStore, Predicates, SortDirection } from "@aws-amplify/datastore";
import { Course } from "../models";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Box,
  Container,
  CssBaseline,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.secondary.main
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
      <Container maxWidth="md">
        <Box component="div" style={{ padding: "50px" }}>
          {courses && (
            <List className={classes.root}>
              {courses.map((course) => (
                <ListItem key={course.id}>
                  <ListItemAvatar>
                    <Avatar style={{ background: "white" }}>
                      <ImageIcon color="primary" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={course.title}
                    secondary={course.desc.substring(0, 25)}
                  />
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Courses;
