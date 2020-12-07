import React, { useState, useRef } from 'react';

import { mainBarItems, mainCompItems } from './navBarItems';

import styles from "./HomePage.module.css";

import { NavLink } from "react-router-dom";

import { RiArrowDropDownLine, RiYoutubeFill } from 'react-icons/ri';

import { FaTelegram, FaInstagram, FaFacebookF } from 'react-icons/fa';

import { FormControl, Button, Select, Menu, MenuItem, Typography, TextField, Popover, Paper, Grow, ClickAwayListener, MenuList, Popper } from '@material-ui/core';

const MainNavBar = () => {
    const [state, setState] = useState(mainCompItems);
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);


    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClick = (event) => {
        setState(prevState => ({
            ...prevState,
            title: event.target.textContent,
        }))
        setOpen(false);
    }


    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }


    return (
        <nav className={styles.mainNav}>
            <a href="/" className={styles.logo}>
                Lemon.isla
            </a>
            {/* {
                state.map((navBars, navIndex) => {
                    <div> */}
            <Button
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onMouseEnter={handleOpen}
                onMouseLeave={handleClose}
                onClick={handleToggle}
            >
                {state.title}
                <RiArrowDropDownLine />
            </Button>
            <Popper open={open} anchorEl={anchorRef.current} onMouseLeave={handleClose} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                    {state.dropdowns.map((dropdown, index) => {
                                        return <MenuItem key={index} onClick={handleClick} >{dropdown}</MenuItem>
                                    })}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
            {/* </div>
                })} */}


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