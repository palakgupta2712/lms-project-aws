import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "320px",
    position: "absolute",
    left: "0"
  },
  nav: {
    padding: "0px 50px"
  },
  title: {
    textAlign: "center",
    padding: "20px",
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
  }, 
  link: {
    textDecoration: 'none',
    padding: '8px',
    fontSize: '15px',

  }
}));

function SideMenu(props) {
  const classes = useStyles();
  return (
    <div >
      <Typography variant="h5" className={classes.title}>
        {props.courseDetails.title}
        <Divider />
      </Typography>
      
      <nav className={classes.nav}>
        <ul className={classes.links}>
          <Link className={classes.link}>Home</Link>
          <Link className={classes.link}>Announcements</Link>
          <Link className={classes.link}>Assignments</Link>
          <Link className={classes.link}>Lessons</Link>
          <Link className={classes.link}>Discussions</Link>
          <Link className={classes.link}>Syllabus</Link>
          <Link className={classes.link}>Files</Link>
          <Link className={classes.link}>Grades</Link>
          <Link className={classes.link}>Notes(Personal)</Link>
          <Link className={classes.link}>Zoom</Link>
          <Link className={classes.link}>Chat</Link>
        </ul>
      </nav>
    </div>
  );
}

export default SideMenu;
