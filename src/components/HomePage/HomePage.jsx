import React from "react";

import { Card, CardContent, Typography, Grid, Button, CardActionArea } from "@material-ui/core";

import styles from "./HomePage.module.css";

const HomePage = () => {
    const obj = ['Men', 'Women', 'Kids'];

    const renderItems = () => {
        return Object.keys(obj).map((index) => {
            return (
                <Grid item component={Card} key={index}>
                    <CardActionArea>

                    </CardActionArea>
                    <CardContent>
                        <Typography color="textPrimary">{obj[index]}</Typography>
                    </CardContent>
                </Grid >)
        });
    }

    return (
        <div>
            <Grid container spacing={3} justify="center">
                {renderItems()}
            </Grid>
        </div>
    );
};

export default HomePage;
