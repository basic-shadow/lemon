import React, { useState } from 'react';

import { mainBarItems, mainCompItems } from './navBarItems';

import styles from "./HomePage.module.css";

import { NavLink } from "react-router-dom";

import { RiArrowDropDownLine, RiYoutubeFill } from 'react-icons/ri';

import { FaTelegram, FaInstagram, FaFacebookF } from 'react-icons/fa'

const MainNavBar = () => {
    const { signin, setSignin } = useState(false);

    return (
        <nav className={styles.mainNav}>
            <NavLink to="/" className={styles.logo}>
                Lemon.isla
            </NavLink>
            <ul className={styles.mainNavlinks} style={{ position: 'relative', right: '8%', width: '20%' }}>
                {mainCompItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <h4 className={styles.mainCompItems}>
                                {item.title}
                            </h4>
                            <RiArrowDropDownLine style={{ position: 'relative', top: '5px', fontSize: '20px', color: "rgb(77, 77, 77)" }} />
                        </li>
                    )
                })}
            </ul>
            <ul className={styles.mainNavlinks} style={{ position: 'relative', left: '12%' }}  >
                {mainBarItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <NavLink to={item.url} className={styles.mainBarItems}>
                                {item.title}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>

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