import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from '../avatar.jpeg'
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: '250px',
    height: '250px',
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Fade down>
          <Avatar className={classes.avatar} src={avatar} alt="pic" />
        </Fade>
      </Grid>
      <Fade left>
        <Typography className={classes.title} variant="h4">
          <Typed strings={["Muhammad Al Mamun"]} typeSpeed={40}/>
        </Typography>
      </Fade>
      <Fade right>
        <Typography className={classes.subtitle} variant="h5">
          <Typed
            strings={[
              "Frontend Developer",
              "Backend Developer",
              "Native App Developer",
            ]}
            typeSpeed={40}
            backSpeed={40}
            loop
          />
        </Typography>
      </Fade>
    </Box>
  );
};

export default Header;
