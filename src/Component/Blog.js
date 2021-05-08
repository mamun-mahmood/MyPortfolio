import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Fade from 'react-reveal/Fade';
import blog1 from '../images/blog1.jpg'
import blog2 from '../images/javascript-es6.png'
import blog3 from '../images/JavaScriptCore-feature.png'
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

const Blog = () => {
    const classes = useStyles();
    const blogs = [
        {
            name: "10 things for modern application development.",
            image: blog1,
            url: 'https://mamamun1999.medium.com/10-things-for-modern-application-development-96fb9ad38edc',
            direction: 'left'
        },
        {
            name: "Intro to the added feature of js (ES6).",
            image: blog2,
            url: 'https://mamamun1999.medium.com/javascript-core-concept-daef0011c9bb'
        },
        {
            name: "Basic JavaScript data types and structure you must know.",
            image: blog3,
            url: 'https://mamamun1999.medium.com/10-things-for-modern-application-development-65f236603d16'
        }
    ];
    return (
        <Box component="div" className={classes.mainContainer}>
            <Grid container justify="center">
                {/* Projects */}
                {blogs.map((project, i) => (
                    <Grid item xs={12} sm={8} md={4} key={i}>
                        <Fade right>
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
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <a target="blank" href={project.url}>
                                        <Button size="small" color="primary">
                                            Visit Blog
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

export default Blog;