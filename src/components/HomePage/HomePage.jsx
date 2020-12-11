import React, { useRef, useEffect } from "react";
import { Button, TextField, Card, CardContent, Typography, Grid, CardActionArea, Divider } from "@material-ui/core";
import { NavLink } from 'react-router-dom';

import styles from "./HomePage.module.css";
import men from '../../images/men.jpg';
import women from '../../images/women.jpg';
import kids from '../../images/kids.jpg';
import { GrCaretNext, GrCaretPrevious, GrWifiNone } from 'react-icons/gr';
import { gsap } from 'gsap';
import img1 from '../../images/img1.jpeg';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import styled, { css } from 'styled-components';
import Zoom from 'react-reveal/Zoom';
import card1 from '../../images/card1.jpeg';
import card2 from '../../images/card2.jpeg';


const HomePage = () => {
    const obj = { 'Men': men, 'Women': women, 'Kids': kids };

    const Container = styled.div`

    position: relative;
    overflow: hidden;
    width: 75%;
    height: 95%;
    `;

    const Arrow = styled.div`
    line-height: 150px;
    z-index: 1000;
    text-align: center;
    position: absolute;
    top: 25%;
    width: 10%;
    font-size: 3rem;
    cursor: pointer;
    user-select: none;
    border-radius: 50%;
    color: white;
    &:hover {
        background: linear-gradient(225deg, rgb(150, 204, 198), rgb(169, 224, 218));
    }

    ${props => props.right ? css`left: 90%;` : css`left: 0%;`}

    `;

    const CarouselUI = ({ position, handleClick, children }) => (
        <Container>

            <Arrow onClick={handleClick} data-position={position - 1}>

                <GrCaretPrevious style={{ transform: 'translate(-12%, 20%)' }} />
            </Arrow>
            {children}
            <Arrow right onClick={handleClick} data-position={position + 1}><GrCaretNext style={{
                transform: 'translate(12%, 20%)'
            }} /></Arrow>
        </Container>
    );
    const Carousel = makeCarousel(CarouselUI);


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
            <div style={{ display: 'grid', gridTemplateRows: '20vh' }}>
                <label className={styles.popularcatalog}>Relevant This Season</label>
            </div>
            <div className={styles.secondpage}>
            </div>

            <div className={styles.secondpageCont}>
                <Carousel defaultWait='none'>
                    <Slide right>
                        <Zoom >
                            <div className={styles.slides}>
                                <div className={styles.eachslide}>
                                    <img src={img1} />
                                    <p>I</p>
                                </div>
                                <div className={styles.eachslide}>
                                    <img src={img1} />
                                    <p>AM</p>
                                </div>
                                <div className={styles.eachslide}>
                                    <img src={img1} />
                                    <p>GROOT</p>
                                </div>
                            </div>
                        </Zoom>
                    </Slide>
                    <Slide right>
                        <Zoom >
                            <div className={styles.slides}>
                                <div className={styles.eachslide}>
                                    <img src={img1} />
                                    <p>I</p>
                                </div>
                                <div className={styles.eachslide}>
                                    <img src={img1} />
                                    <p>AM</p>
                                </div>
                                <div className={styles.eachslide}>
                                    <img src={img1} />
                                    <p>isla</p>
                                </div>
                            </div>
                        </Zoom>
                    </Slide>
                </Carousel>
            </div>

            <div className={styles.thirdpage}>
                <div >
                    <div className={styles.thirdpageHeaders}>
                        <h1>Popular</h1>
                        <h2>Catalog</h2>
                    </div>
                    <div className={styles.thirdpagebox}>
                        <div className={styles.box}>
                            <div className={styles.imgBox}>
                                <img src={card1} />
                            </div>
                            <div className={styles.contentBox}>
                                <h2>Image Caption</h2>
                                <p>Some text is written here</p>
                            </div>
                        </div>

                        <div className={styles.box}>
                            <div className={styles.imgBox}>
                                <img src={card1} />
                            </div>
                            <div className={styles.contentBox}>
                                <h2>Image Caption</h2>
                                <p>Some text is written here</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div className={styles.prelastpage}>
                <div style={{ marginTop: '10%' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(200, 222, 222)" fill-opacity="1" d="M0,224L48,202.7C96,181,192,139,288,117.3C384,96,480,96,576,117.3C672,139,768,181,864,192C960,203,1056,181,1152,160C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                </div>
                <div className={styles.pagecontent}>
                    <Typography variant="h4" style={{
                        color: 'black', opacity: 0.85,
                        transform: 'translateY(-200%)'
                    }}>
                        Members Lemon.isla can save ~15% per purchase of their shopping
                    </Typography>
                    <Typography variant="subtitle1" style={{
                        color: 'black', opacity: 0.7,
                        transform: 'translateY(-200%)'
                    }}>
                        You can always become a member of our community. Never overpay in future!
                    </Typography>
                    <div className={styles.emailsend}>
                        <input id="enteremail" placeholder="Email" label="asdsad" className={styles.enterEmail} />
                        <label for="enteremail" className={styles.labelEmail}>Your Email</label>
                        <button className={styles.emailButton} >Send</button>
                    </div>
                </div>
                <div >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 400"><path fill="rgb(200, 222, 222)" fill-opacity="1" d="M0,224L48,202.7C96,181,192,139,288,117.3C384,96,480,96,576,117.3C672,139,768,181,864,192C960,203,1056,181,1152,160C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                </div>
            </div>

        </div >
    );
};

export default HomePage;
