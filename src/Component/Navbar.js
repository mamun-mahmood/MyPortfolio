import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import ArrowBack from "@material-ui/icons/ArrowBack";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Home from "@material-ui/icons/Home";
import Apps from "@material-ui/icons/Apps";
import ContactMail from "@material-ui/icons/ContactMail";
import SubjectIcon from '@material-ui/icons/Subject';
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.jpeg";
import InfoIcon from '@material-ui/icons/Info';

import Footer from "../Component/Footer";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundImage: 'linear-gradient(to right top, #000000, #1c070d, #2d0c13, #400a16, #530617)',
  },
  arrow: {
    color: "tomato",
  },
  title: {
    color: "tan",
  },
  menuSliderContainer: {
    width: 250,
    backgroundImage: 'linear-gradient(to right top, #000000, #1c070d, #2d0c13, #400a16, #530617)',
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan"
  },
}));

const menuItems = [
  { listIcon: <Home />, listText: "Home", listPath: "/" },
  { listIcon: <Apps />, listText: "Projects", listPath: "/portfolio" },
  { listIcon: <ContactMail />, listText: "Contact", listPath: "/contact" },
  { listIcon: <SubjectIcon />, listText: "Blog", listPath: "/blog" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      <Avatar className={classes.avatar} src={avatar} alt="avatar" />
      <Divider />
      <List>
        {menuItems.map((item, i) => (
          <ListItem
            button
            key={i}
            className={classes.listItem}
            onClick={() => setOpen(false)}
            component={Link}
            to={item.listPath}
          >
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText primary={item.listText} />
          </ListItem>
        ))}
        <a
          className={classes.listItem}
          onClick={() => setOpen(false)}
          style={{ textDecoration: 'none' }} target="blank" href="https://drive.google.com/uc?export=download&id=14DWcnxeJymAM5AWZfayYbRHjwziPScKH">
          <ListItem
            className={classes.listItem}
            onClick={() => setOpen(false)}
          >
            <ListItemIcon className={classes.listItem}>
              <AssignmentInd />
            </ListItemIcon>
            <ListItemText primary='Resume' />
          </ListItem>
        </a>
        <ListItem
          button
          className={classes.listItem}
          onClick={() => setOpen(false)}
          component={Link}
          to='/aboutMe'
        >
          <ListItemIcon className={classes.listItem}>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary='About me' />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Box component="nav">
        <AppBar position="static"  className={classes.appbar}>
          <Toolbar>
            <IconButton onClick={() => setOpen(true)}>
              <ArrowBack className={classes.arrow} />
            </IconButton>
            <Typography variant="h5" className={classes.title}>
              Here's my
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        {sideList()}
        <Footer />
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;
