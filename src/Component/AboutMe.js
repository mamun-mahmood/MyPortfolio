import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import reactLogo from '../images/react-logo-vector.svg'
import jsLogo from '../images/480px-Unofficial_JavaScript_logo_2.svg.png'
import MongoDB from '../images/MongoDB-Emblem.jpg'
import Express from '../images/logo-express-js.png'
import web from '../images/web.png'
import native from '../images/native.png'
import frontend from '../images/frontend.png'
import backend from '../images/backend.png'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    grid: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        opacity: '0.9',
    },
    header: {
        backgroundColor: 'black',
        padding: '10px',
    },
    card: {
        backgroundColor: 'black',
    },
    hover: {
        "&:hover": {
            backgroundColor: 'rgb(7, 177, 77, 0.42)',
            height: '200px'
        }
    }
}));
const AboutMe = () => {
    const classes = useStyles();
    const cardData = [
        {
            title: 'Java Script',
            img: jsLogo,
            info: [
                {
                    data: 'Problem Solving',
                },
                {
                    data: 'Hoisting'
                },
                {
                    data: 'Closure in JavaScript'
                },
                {
                    data: 'Instantiation Patterns'
                },
                {
                    data: '.call vs .apply'
                },
                {
                    data: 'Tree vs Graph Data Structure'
                },
                {
                    data: 'Time Complexity'
                }
            ],
            key: 1,
        },
        {
            title: 'React',
            img: reactLogo,
            info: [
                {
                    data: 'HTML + CSS',
                },
                {
                    data: 'JSX'
                },
                {
                    data: 'JS Fundamentals + ES6'
                },
                {
                    data: 'Optimization'
                },
                {
                    data: 'Git',
                },
                {
                    data: 'Redux'
                },
                {
                    data: 'Virtual DOM'
                }
            ],
            key: 1,
        },
        {
            title: 'MongoDB',
            img: MongoDB,
            info: [
                {
                    data: 'Ad-hoc queries optimization'
                },
                {
                    data: 'Approachability',
                },
                {
                    data: 'Detail-Oriented'
                },
                {
                    data: 'Analytical'
                },
                {
                    data: 'Adaptability'
                },
                {
                    data: 'Data Organization'
                }
            ],
            key: 1,
        },
        {
            title: 'Express',
            img: Express,
            info: [
                {
                    data: 'Faster Server development',
                },
                {
                    data: 'Middleware'
                },
                {
                    data: 'Routing'
                },
                {
                    data: 'Templating'
                },
                {
                    data: 'Debugging'
                }
            ],
            key: 1,
        },
    ]
    const service = [
        {
            title: 'Web Application development',
            img: web,
            info: [
                {
                    data: 'React'
                },
                {
                    data: 'Express'
                },
                {
                    data: 'MongoDB'
                },
                {
                    data: 'nodeJs'
                }
            ]
        },
        {
            title: 'Native Application development',
            img: native,
            info: [
                {
                    data: 'React Native'
                },
                {
                    data: 'Express'
                },
                {
                    data: 'MongoDB'
                },
                {
                    data: 'nodeJs'
                }
            ]
        },
        {
            title: 'Backend development',
            img: backend,
            info: [
                {
                    data: 'NodeJs'
                },
                {
                    data: 'Express'
                },
                {
                    data: 'MongoDB'
                },
            ]
        },
        {
            title: 'Frontend development',
            img: frontend,
            info: [
                {
                    data: 'React'
                },
                {
                    data: 'Material UI'
                },
                {
                    data: 'Html/CSS'
                },
                {
                    data: 'Bootstrap'
                }
            ]
        },
    ]
    console.log(cardData[0].info[0].data);
    return (
        <div >
            <Fade right>
                <div className={classes.header} style={{ display: 'flex', justifyContent: "center", color: 'white', marginTop: '80px', marginBottom: '30px' }}>
                    <Typography variant="h4">
                        Hi Welcome, Glad to see you here!
                    </Typography>
                </div>
            </Fade>
            <Fade left>
                <div className={classes.header} style={{ display: 'flex', justifyContent: "center", color: 'white', marginTop: '80px', marginBottom: '30px' }}>
                    <Typography variant="h4">
                        My Skills
                    </Typography>
                </div>
            </Fade>
            <Grid className={classes.root} container justify="center">
                {cardData.map((card, i) => (
                    <Grid className={classes.grid} item xs={10} sm={6} md={3} key={i}>
                        <Fade right>
                            <Flippy
                                flipOnHover={false} // default false
                                flipOnClick={true} // default false
                                flipDirection="horizontal"
                            >
                                <FrontSide className={classes.card}>
                                    <img src={card.img} style={{ height: '220px', width: '100%' }} alt="" />
                                </FrontSide>
                                <BackSide
                                    style={{ backgroundColor: 'white', overflowY: 'scroll'}}>
                                    <Typography variant="h4">
                                        {card.title}
                                    </Typography>
                                        {
                                            card.info.map(data => <div>
                                                <li
                                                    style={{listStyleType: 'none', fontSize: '18px', color: 'black', marginTop: '5px' }}>
                                                    {data.data}
                                                </li>
                                            </div>)
                                        }
                                </BackSide>
                            </Flippy>
                        </Fade>
                    </Grid>
                ))}
            </Grid>
            <Fade left>
                <div className={classes.header} style={{ display: 'flex', justifyContent: "center", color: 'white', marginTop: '80px', marginBottom: '30px' }}>
                    <Typography variant="h4">
                        My service
                    </Typography>
                </div>
            </Fade>
            <Grid className={classes.root} container justify="center">
                {service.map((card, i) => (
                    <Grid className={classes.grid} item xs={10} sm={6} md={3} key={i}>
                        <Fade right>
                            <Flippy
                                flipOnHover={false} // default false
                                flipOnClick={true} // default false
                                flipDirection="horizontal"
                            >
                                <FrontSide className={classes.card}>
                                    <img src={card.img} style={{ height: '220px', width: '100%' }} alt="" />
                                </FrontSide>
                                <BackSide
                                    style={{ backgroundColor: 'white', overflowY: 'scroll'}}>
                                    <Typography variant="h6">
                                        {card.title}
                                    </Typography>
                                        {
                                            card.info.map(data => <div>
                                                <li
                                                    style={{listStyleType: 'none', fontSize: '18px', color: 'black', marginTop: '5px' }}>
                                                    {data.data}
                                                </li>
                                            </div>)
                                        }
                                </BackSide>
                            </Flippy>
                        </Fade>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default AboutMe;