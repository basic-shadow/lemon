import React, { useState } from 'react';

import { catalogNavItems } from './navBarItems';

import styles from "./HomePage.module.css";

import { NavLink } from "react-router-dom";

import { BsSearch } from 'react-icons/bs';

import { Divider, FormControl, TextField } from '@material-ui/core'

import lemon from '../../images/lemon.png';

const CatalogNavBar = () => {
    const { clicked, setClicked } = useState(false);

    return (
        <div>
            <nav className={styles.catalogNav} style={{
                visibility: window.location.pathname === '/signin' ? 'hidden' : window.location.pathname === '/signup' ? 'hidden' : 'visible'
            }}>
                <img src={lemon} className={styles.lemon} />
                <ul className={styles.mainNavlinks} style={{ width: '50%' }}>
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
                <FormControl className={styles.searchBar}>
                    <TextField placeholder="Search" variant="outlined" />
                    <BsSearch style={{ cursor: 'pointer' }} onClick={() => alert('isla in the building')}
                        style={{ position: 'relative', right: '8%' }} />
                </FormControl>
            </nav >
            <Divider />
        </div >
    )
}

export default CatalogNavBar;