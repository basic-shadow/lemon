import React, { useRef, useEffect } from "react";
import { Card, CardContent, Typography, Grid, CardActionArea, Divider } from "@material-ui/core";

import styles from "./HomePage.module.css";
import men from '../../images/men.jpg';
import women from '../../images/women.jpg';
import kids from '../../images/kids.jpg';
import { GrCaretNext } from 'react-icons/gr';
import { gsap } from 'gsap';


const HomePage = () => {
    const obj = { 'Men': men, 'Women': women, 'Kids': kids };

    const t1 = gsap.timeline({ defaults: { ease: "power1.out" } });
    let ref = useRef(null);


    const renderItems = () => {
        return Object.keys(obj).map((item, index) => {
            return (
                <Card id={`${item}${index}`} className={styles.card} key={index} onClick={() => {
                    console.log(ref);
                    t1.fromTo(ref, { x: '0%' }, { x: '15%', duration: 2 });
                }}>
                    <CardActionArea>
                        <CardContent>
                            <img src={obj[item]} className={styles.menImg} />

                            <div style={{
                                position: 'absolute', backgroundColor: 'rgba(255, 255, 255, 0.8)', left: '22%', top: '72%',
                                width: '50%', height: '10%', display: 'flex', alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Typography style={{ fontSize: '2em', fontFamily: 'Lobster, cursive' }}>{item}
                                </Typography>
                                <GrCaretNext ref={el => ref = el} />

                            </div>
                            {/* <div className={styles.focusToCheck}>
                                <Typography style={{
                                    position: 'absolute', top: '38%', left: '38%', fontFamily: 'Ranchers, cursive',
                                    color: 'rgb(1, 1, 1)', fontSize: '3.5em'
                                }}>Shop</Typography>
                            </div> */}
                        </CardContent>
                    </CardActionArea>
                </Card >)
        });
    }


    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Grid container style={{
                display: 'grid', gridTemplateColumns: 'repeat(3, minmax(8rem, 1fr))', justifyItems: 'center',
                justifyContent: 'space-between', gridTemplateRows: '25vh 5vh 10vh 10vh', width: '80%'
            }}>
                {renderItems()}
            </Grid>

        </div >
    );
};

export default HomePage;
