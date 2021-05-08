import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import project1 from "../images/p1.png";
import project2 from "../images/p2.png";
import project3 from "../images/p3.png";
import project4 from "../images/p4.png";
import project5 from "../images/p5.png";
import project6 from "../images/p6.png";
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "",
    height: 300,
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "School of Music",
    description: ` Firebase authentication with gmail for login. Different dashboard for student and teacher(admin).  Stripe payment gateway embedded for payment.`,
    image: project1,
    url: 'https://schoolofmusic.netlify.app/',
    direction: 'left'
  },
  {
    name: "Grocery Hub",
    description: `Firebase authentication with gmail for login. Add or remove product from the dashboard panel. Manage all orders.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.`,
    image: project2,
    url: 'https://sad-kilby-131109.netlify.app/'
  },
  {
    name: "Hacker news",
    description: `This is a clone application of hacker news website. Build with react using hack news api. Has features like sorting top, new or best article.Lorem ipsum dolor sit amet.`,
    image: project3,
    url: 'https://hackernews01.netlify.app/'
  },
  {
    name: "Hungry Monster",
    description: `This is a food recipe website. Here your can search by food name for their recipe.Lorem ipsum dolor sit amet.`,
    image: project4,
    url: 'https://mamamun009.github.io/hungry-monster/'
  },
  {
    name: "Image Slider",
    description: `A web slider. You can select images and create a slider.
    Also has select or deselect all images and change slider duration`,
    image: project5,
    url: 'https://mamamun009.github.io/Image-Slider/'
  },
  {
    name: "Commerce Page",
    description: `This is a simple responsive landing page. Has multiple product option, Also top banner and footer section with contact form`,
    image: project6,
    url: 'https://mamamun009.github.io/Simple-Responsive-Landing-Page/'
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Fade left>
              <Card className={classes.cardContainer}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Project 1"
                    height="140"
                    image={project.image}
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {project.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <a target="blank" href={project.url}>
                    <Button size="small" color="primary">
                      Live Demo
                </Button>
                  </a>
                </CardActions>
              </Card>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
