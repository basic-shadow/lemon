import React, { useState } from 'react';

import { catalogNavItems } from './navBarItems';

import styles from "./HomePage.module.css";

import { NavLink } from "react-router-dom";

const CatalogNavBar = () => {
    const { clicked, setClicked } = useState(false);

    return (
        <nav className={styles.mainNav} style={{ background: "0", marginTop: "7%" }}>
            <h1>
                Logo
            </h1>
            <ul className={styles.mainNavlinks} style={{ position: 'relative', right: '15%', width: '50%' }}>
                {catalogNavItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <NavLink to={item.url} className={styles.catalogItems}>
                                {item.title}
                            </NavLink>

                        </li>
                    )
                })}
            </ul>
        </nav >
    )
}

export default CatalogNavBar;