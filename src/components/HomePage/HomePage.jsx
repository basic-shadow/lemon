import React, { useRef, useEffect } from "react";
import { Card, CardContent, Typography, Grid, CardActionArea, Divider } from "@material-ui/core";
import { NavLink } from 'react-router-dom';

import styles from "./HomePage.module.css";
import men from '../../images/men.jpg';
import women from '../../images/women.jpg';
import kids from '../../images/kids.jpg';
import { GrCaretNext } from 'react-icons/gr';
import { gsap } from 'gsap';


const HomePage = () => {
    const obj = { 'Men': men, 'Women': women, 'Kids': kids };


    const renderItems = () => {
        return Object.keys(obj).map((item, index) => {
            return (
                <Card className={styles.card} key={index}>
                    <CardActionArea>
                        <NavLink to='/catalog'>
                            <CardContent className={styles.cardcontent}>
                                <img src={obj[item]} className={styles.menImg} />

                                <div style={{
                                    position: 'absolute', backgroundColor: 'rgba(255, 255, 255, 0.8)', left: '22%', top: '72%',
                                    width: '50%', height: '10%', display: 'flex', alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Typography className={styles.textMen} style={{ fontSize: '2em', fontFamily: 'Lobster, cursive' }}>{item}
                                    </Typography>
                                    <GrCaretNext className={styles.next} />

                                </div>
                            </CardContent>
                        </NavLink>
                    </CardActionArea>
                </Card >)
        });
    }


    return (
        <div>
            <div className={styles.selectionmenu}>
                <Grid container style={{
                    display: 'grid', gridTemplateColumns: 'repeat(3, minmax(8rem, 1fr))', justifyItems: 'center',
                    justifyContent: 'space-between', width: '80%', height: '62vh'
                }}>
                    {renderItems()}


                </Grid>
            </div >

            <Divider style={{ backgroundColor: 'black', opacity: 0.3 }} />

            <div className={styles.anotherpage}>
                <h1> another page </h1>
            </div>

        </div>
    );
};

export default HomePage;
