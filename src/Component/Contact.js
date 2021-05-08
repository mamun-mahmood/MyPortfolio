import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";
import Fade from 'react-reveal/Fade';
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  contactContainer: {
    height: "100vh",
  },
  
  heading: {
    color: "black",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    background: "#ebebe0",
    padding: '20px',
    borderRadius: '10px'
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "black",
  },
  field: {
    margin: "1rem 0rem",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "black",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
      },
      "&:hover fieldset": {
        borderColor: "black",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "black",
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();
  const [data] = useState({})
  const handleBlur = (e) => {
    data[e.target.name] = e.target.value
    
  }
  const sendMail = () => {
    axios.post('https://shielded-inlet-22568.herokuapp.com/sendMail',
      data)
      .then(res => {

      })
      .catch(err => {
        console.log(err);
      })
    console.log(classes.input);
  }
  return (
    <Fade right>
      <Box component="div" className={classes.contactContainer}>
        <Grid container justify="center">
          <Box component="form" className={classes.form}>
            <Typography variant="h5" className={classes.heading}>
              Hire or Contact me...
            </Typography>
            <InputField
              fullWidth={true}
              label="Name"
              name="name"
              variant="outlined"
              autoFocus
              onBlur={handleBlur}
            />
            <InputField
              fullWidth={true}
              label="Email"
              variant="outlined"
              className={classes.field}
              name="email"
              onBlur={handleBlur}
            />
            <InputField
              fullWidth={true}
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              name="msg"
              onBlur={handleBlur}
            />
            <Button
              variant="outlined"
              fullWidth={true}
              endIcon={<Send />}
              onClick={sendMail}
              className={classes.button}
            >
              Contact Me
            </Button>
          </Box>
        </Grid>
      </Box>
    </Fade>
  );
};

export default Contact;
