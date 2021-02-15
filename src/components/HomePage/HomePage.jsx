import React from "react";
import { Typography, Grid,  Divider } from "@material-ui/core";
import { NavLink } from 'react-router-dom';

import styles from "./HomePage.module.css";
import men from '../../images/men.jpg';
import women from '../../images/women.jpg';
import kids from '../../images/kids.jpg';
import { GrCaretNext, GrCaretPrevious, GrWifiNone } from 'react-icons/gr';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import styled, { css } from 'styled-components';
import Zoom from 'react-reveal/Zoom';
import card1 from '../../images/card1.jpeg';
import bags from '../../images/bags.jpg';
import blouses from '../../images/blouses.jpg';
import boots from '../../images/boots.jpg';
import coats from '../../images/coats.jpeg';
import jackets from '../../images/jackets.jpg';
import jeans from '../../images/jeans.jpg';
import printedshirts from '../../images/printedshirts.jpg';


const HomePage = () => {
    const obj = { 'Men': men, 'Women': women, 'Kids': kids };

    const Container = styled.div`
    position: relative;
    overflow: hidden;
    width: 75%;
    height: 95%;
    `;

    const Arrow = styled.div`
    line-height: 100px;
    z-index: 1000;
    text-align: center;
    position: absolute;
    top: 30%;
    width: 10%;
    font-size: 3rem;
    cursor: pointer;
    user-select: none;
    border-radius: 30%;

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
                <div className={styles.card} key={index}>
                    <NavLink to='/catalog'>
                        <div className={styles.cardcontent}>
                            <img src={obj[item]} />
                            <div className={styles.menText}>
                                <Typography className={styles.textMen} style={{ fontSize: '2em', fontFamily: 'Lobster, cursive' }}>{item}
                                </Typography>
                                <GrCaretNext className={styles.next} />
                            </div>
                        </div>
                    </NavLink>
                </div>)
        });
    }

    return (
        <div>
            <div className={styles.selectionmenu}>
                <Grid container className={styles.cardBox}>
                    {renderItems()}
                </Grid>
            </div >

            <div className={styles.secondpage}>
                <div style={{ position: 'relative', background: 'rgb(28, 28, 71)', height: '35%', width: '100%' }}>
                </div>
                <div className={styles.secondpageCont}>
                    <div style={{ marginTop: '2%', marginBottom: '2%', display: 'flex', fontSize: '2.2rem' }}>
                        <p>Relevant this</p>
                        <p style={{ fontWeight: '700', transform: 'translateX(10%)' }}>Season</p>
                    </div>
                    <Carousel defaultWait='none'>
                        <Slide right>
                            <Zoom >
                                <div className={styles.slides}>
                                    <div className={styles.eachslide}>
                                        <img src={bags} />
                                        <p>Bags</p>
                                    </div>
                                    <div className={styles.eachslide}>
                                        <img src={blouses} />
                                        <p>Blouses</p>
                                    </div>
                                    <div className={styles.eachslide}>
                                        <img src={boots} />
                                        <p>Boots</p>
                                    </div>
                                </div>
                            </Zoom>
                        </Slide>
                        <Slide right>
                            <Zoom >
                                <div className={styles.slides}>
                                    <div className={styles.eachslide}>
                                        <img src={coats} />
                                        <p>Coats</p>
                                    </div>
                                    <div className={styles.eachslide}>
                                        <img src={jackets} />
                                        <p>Jackets</p>
                                    </div>
                                    <div className={styles.eachslide}>
                                        <img src={jeans} />
                                        <p>Jeans</p>
                                    </div>
                                </div>
                            </Zoom>
                        </Slide>
                    </Carousel>
                </div>
            </div>
            <Divider style={{ height: '0.1rem', background: '#d0d9e2' }} />

            <div className={styles.thirdpage}>
                <div className={styles.thirdpageHeaders}>
                    <h1>Popular</h1>
                    <h2>Catalog</h2>
                </div>
                <div className={styles.thirdpagebox}>
                    <div className={styles.box} >
                        <div className={styles.imgBox1}>
                            <img src={printedshirts} />
                        </div>
                        <div className={styles.contentBox1}>
                            <div className={styles.content1}>
                                <h2>Printed men's shirts</h2>
                                <p>Opportunity to create your own print in chosen shir qweqwet</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.box} >
                        <div className={styles.imgBox2}>
                            <img src={printedshirts} />
                        </div>
                        <div className={styles.contentBox2}>
                            <div className={styles.content2}>
                                <h2>Printed men's shirts</h2>
                                <p>Opportunity to create your own print in chosen shir qweqwet</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.box} >
                        <div className={styles.imgBox1}>
                            <img src={printedshirts} />
                        </div>
                        <div className={styles.contentBox1}>
                            <div className={styles.content1}>
                                <h2>Printed men's shirts</h2>
                                <p>Opportunity to create your own print in chosen shir qweqwet</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.area1} >
                </div >
                <div className={styles.area2} >
                </div >
                <div className={styles.area3} >
                </div >
                <div className={styles.area4} >
                </div >
            </div>

            <div className={styles.prelastpage}>
                <div style={{ marginTop: '10%' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#455066" fill-opacity="1" d="M0,224L48,202.7C96,181,192,139,288,117.3C384,96,480,96,576,117.3C672,139,768,181,864,192C960,203,1056,181,1152,160C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                </div>
                <div className={styles.pagecontent}>
                    <Typography variant="h4" style={{
                        color: '#fff', opacity: 0.85,
                        transform: 'translateY(-200%)'
                    }}>
                        Members Lemon.isla can save ~15% per purchase of their shopping
                    </Typography>
                    <Typography variant="subtitle1" style={{
                        color: '#fff', opacity: 0.7,
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 400"><path fill="#455066" fill-opacity="1" d="M0,224L48,202.7C96,181,192,139,288,117.3C384,96,480,96,576,117.3C672,139,768,181,864,192C960,203,1056,181,1152,160C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                </div>
            </div>

        </div >
    );
};

export default HomePage;
