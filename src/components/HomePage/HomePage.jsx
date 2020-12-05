import React from "react";

import { Card, CardContent, Typography, Grid, Button, CardActionArea } from "@material-ui/core";

import styles from "./HomePage.module.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

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



    const navCatalog = () => {
        return (
            <h1>menu</h1>
        )
    }

    return (
        <Grid container justify="center">
            {renderItems()}
        </Grid>
    );
};

export default HomePage;
