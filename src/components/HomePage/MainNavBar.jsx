import React, { useState } from 'react';

import { mainBarItems } from './navBarItems';

import styles from "./HomePage.module.css";

import { NavLink } from "react-router-dom";

import { RiYoutubeFill } from 'react-icons/ri';

import { FaTelegram, FaInstagram, FaFacebookF } from 'react-icons/fa';

import { Button } from '@material-ui/core';
import { NavBars } from './NavBars';

const MainNavBar = () => {

    return (
        <nav className={styles.mainNav}>
            <a href="/" className={styles.logo}>
                Lemon.isla
            </a>

            <NavBars />

            < ul className={styles.mainNavlinks} style={{ position: 'relative', left: '12%' }}  >
                {mainBarItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <NavLink to={item.url} className={styles.mainBarItems} >
                                {item.title}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
            <Button className={styles.btn}
                href='/signin' color='secondary' variant="outlined" size="small" disableElevation>
                Sign In
            </Button>
            <ul style={{ display: 'flex', position: 'relative', justifyContent: 'space-around', width: '12%', left: '3%' }}>
                <FaTelegram />
                <FaInstagram />
                <FaFacebookF />
                <RiYoutubeFill />
            </ul>
        </nav >
    )
}

export default MainNavBar;