import React, { useState } from 'react';

import { mainBarItems, mainCompItems } from './navBarItems';

import styles from "./HomePage.module.css";

import { NavLink } from "react-router-dom";

import { RiArrowDropDownLine, RiYoutubeFill } from 'react-icons/ri';

import { FaTelegram, FaInstagram, FaFacebookF } from 'react-icons/fa'

import { FormControl, Button, Select, Menu, MenuItem, Typography, TextField, Popover } from '@material-ui/core';

const MainNavBar = () => {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpen = (event) => {
        setOpen(true);
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setOpen(false);
        setAnchorEl(null);
    }

    console.log(open);
    return (
        <nav className={styles.mainNav}>
            <a href="/" className={styles.logo}>
                Lemon.isla
            </a>

            <Typography
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouse
            >
                Hover with a Popover.
      </Typography>
            <Popover
                id="mouse-over-popover"
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handleClose}
                disableRestoreFocus
            >
                <Typography>I use Popover.</Typography>
            </Popover>

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