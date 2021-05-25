import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  Container,
  Box,
  Input,
  FormControl,
  InputLabel,
  Button,
  Typography,
  TextField
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { DataStore } from "@aws-amplify/datastore";
import { Course } from "../models";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "50ch"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  buttonGrp: {
    float: "right",
    display: "flex",
    flexDirection: "row",
    padding: "50px",
    marginLeft: theme.spacing(3)
  }
}));

function NewCourse() {
  const classes = useStyles();
  let history = useHistory();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  useEffect(() => {
    Auth.currentUserInfo().then((user) => {
      setCreatedBy(user.username);
    }, []);
  });
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(title, desc);
    await DataStore.save(
      new Course({
        title: title,
        desc: desc,
        createdBy: createdBy,
        createdAt: new Date().toLocaleString()
      })
    );
    history.push("/courses");
  }
  function handleCancel() {
    history.push("/home");
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Box component="div" style={{ padding: "50px" }}>
          <form onSubmit={handleSubmit}>
            <div className={classes.form}>
              <Typography variant="h6">Create a new course</Typography>

              <FormControl className={classes.textField}>
                <InputLabel>Title</InputLabel>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FormControl>
              <br />
              <FormControl className={classes.textField}>
                <TextField
                  label="Add Description"
                  multiline
                  rows={4}
                  variant="outlined"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </FormControl>
            </div>

            <FormControl className={classes.buttonGrp}>
              <Button
                variant="contained"
                color="primary"
                style={{ margin: "0px 10px" }}
                onClick={handleSubmit}
              >
                Create
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </FormControl>
          </form>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default NewCourse;
