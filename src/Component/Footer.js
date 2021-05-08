import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GitHub from "@material-ui/icons/GitHub";
import Instagram from "@material-ui/icons/Instagram";
import LinkedIn  from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <a target="blank" href="https://www.linkedin.com/in/muhammad-al-mamun-ba2260181/"><BottomNavigationAction icon={<LinkedIn />} className={classes.root} /></a>
      <a target="blank" href="https://github.com/mamamun009"><BottomNavigationAction icon={<GitHub />} className={classes.root} /></a>
      <a target="blank" href="https://www.instagram.com/mamun_mahmood/"><BottomNavigationAction icon={<Instagram />} className={classes.root} /></a>
    </BottomNavigation>
  );
};
export default Footer;
