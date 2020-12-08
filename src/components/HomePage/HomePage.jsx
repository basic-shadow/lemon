import React from "react";
import { Card, CardContent, Typography, Grid, CardActionArea } from "@material-ui/core";

import styles from "./HomePage.module.css";
import men from '../../images/men.jpg';
import women from '../../images/women.jpg';
import kids from '../../images/kids.jpg';

const HomePage = () => {
    const obj = { 'Men': men, 'Women': women, 'Kids': kids };

    const renderItems = () => {
        return Object.keys(obj).map((item, index) => {
            return (
                <Card className={styles.card} key={index} >
                    <CardActionArea>
                        <CardContent>
                            <img src={obj[item]} className={styles.menImg} />
                            <Typography align='center' style={{
                                fontSize: '2em', marginTop: '4%'
                            }}>{item}</Typography>
                            <div style={{ display: 'grid', width: '10%', background: '#fff' }}>
                                <Typography style={{ position: 'absolute', top: '50%', left: '50%' }}>Shop</Typography>
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Card >)
        });
    }


    return (
        <Grid container justify="center">
            {renderItems()}
        </Grid>
    );
};

export default HomePage;
