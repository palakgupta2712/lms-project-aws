import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    height: "100%",
    width: "320px",
    position: "absolute",
    left: "0"
  },
  links: {
    background: "white",
    padding: "30px 60px"
  },
  title: {
    textAlign: "center",
    padding: "20px",
    color: "white"
  }
}));

function SideMenu(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.title}>
        {props.courseDetails.title}
      </Typography>
      <nav className={classes.links}>
        <ul>
          <li>Home</li>
          <li>Announcements</li>
          <li>Assignments</li>
          <li>Lessons</li>
          <li>Discussions</li>
          <li>Syllabus</li>
          <li>Files</li>
          <li>Grades</li>
          <li>Notes(Personal)</li>
          <li>Zoom</li>
          <li>Chat</li>
        </ul>
      </nav>
    </div>
  );
}

export default SideMenu;
