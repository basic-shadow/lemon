import React from "react";

import { Card, CardContent, Typography, Grid, Button, CardActionArea } from "@material-ui/core";

import styles from "./HomePage.module.css";
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom";

const HomePage = () => {
    const obj = ['Men', 'Women', 'Kids'];

    const renderItems = () => {
        return Object.keys(obj).map((index) => {
            return (
                <Card className={styles.card} key={index}>
                    <CardActionArea>
                        <CardContent>
                            <Typography>{obj[index]}</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card >)
        });
    }

    const navBar = () => {
        return (
            <div>
                <Nav>
                    <NavLink to="/">
                        <h1>Logo</h1>
                    </NavLink>
                </Nav>
            </div>
        )
    }

    return (
        <div>
            <Grid container justify="center">
                {renderItems()}
            </Grid>
        </div>
    );
};

export default HomePage;
