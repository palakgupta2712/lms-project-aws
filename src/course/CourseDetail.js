import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { DataStore } from "@aws-amplify/datastore";
import { Course } from "../models";
import error from "../error.png";
import {
  Box,
  Card,
  CardHeader,
  CssBaseline,
  Typography,
  IconButton,
  Button,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Delete, Edit } from "@material-ui/icons";
import SideMenu from "./SideMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    flexGrow: 1
  },
  card: {
    padding: "24px 40px 40px"
  },
  subheading: {
    margin: "10px",
    color: theme.palette.primary.main
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary
  },
  box : {
    padding: theme.spacing(4)
  }
}));

function CourseDetail() {
  const classes = useStyles();

  let { id } = useParams();
  const [courseDetails, setCourseDetails] = useState([]);
  useEffect(() => {
    getCourseDetail();
  });

  async function getCourseDetail() {
    const models = await DataStore.query(Course, id);
    setCourseDetails(models);
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container xs>
        {courseDetails ? (
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={3}>
                <SideMenu courseDetails={courseDetails} />
              </Grid>
              <Grid item xs={12} md={9}>
                <Box className={classes.box}>
                  <Card className={classes.card}>
                    <CardHeader
                      title={courseDetails.title}
                      subheader={"By " + courseDetails.createdBy}
                      action={
                        <div>
                          <span>
                            <IconButton>
                              <Edit color="secondary" />
                            </IconButton>
                          </span>
                          <span>
                            <IconButton>
                              <Delete color="secondary" />
                            </IconButton>
                          </span>
                        </div>
                      }
                    />
                    <div>
                      <Typography variant="body1">
                        {courseDetails.desc}
                      </Typography>
                    </div>
                    <br />
                    <div style={{ float: "right" }}>
                      <Button variant="outlined" color="secondary">
                        + Add lesson
                      </Button>
                    </div>
                  </Card>
                </Box>
              </Grid>
            </Grid>
          </div>
        ) : (
          <div>
            <Box
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center"
              }}
            >
              <img src={error} alt="error-404" width="400px" height="400px" />
            </Box>
          </div>
        )}
      </Grid>
    </React.Fragment>
  );
}

export default CourseDetail;
