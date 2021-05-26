import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { DataStore } from "@aws-amplify/datastore";
import { Course } from "../models";
import error from "../error.png";
import {
  Box,
  Card,
  CardHeader,
  Container,
  CssBaseline,
  Typography,
  IconButton,
  Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Delete, Edit } from "@material-ui/icons";
import SideMenu from "./SideMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "320px",
    padding: theme.spacing(4)
  },
  card: {
    padding: "24px 40px 40px"
  },
  subheading: {
    margin: "10px",
    color: theme.palette.primary.main
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

      <Container>
        <Box>
          {courseDetails ? (
            <div>
              <SideMenu courseDetails={courseDetails} />
              <Box className={classes.root}>
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
            </div>
          ) : (
            <Box
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center"
              }}
            >
              <img src={error} alt="error-404" width="400px" height="400px" />
            </Box>
          )}
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default CourseDetail;
