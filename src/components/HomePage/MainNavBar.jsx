import React, { useState, useRef, useEffect } from 'react';
import { mainBarItems, mainCompItems } from './navBarItems';
import styles from "./HomePage.module.css";
import { NavLink } from "react-router-dom";
import { RiArrowDropDownLine, RiYoutubeFill } from 'react-icons/ri';
import { FaTelegram, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { Button, MenuItem, Paper, Grow, ClickAwayListener, MenuList, Popper, Divider } from '@material-ui/core';
import { gsap } from 'gsap';


const MainNavBar = () => {
    const [city, setCity] = useState(mainCompItems[0]);
    const [lang, setLang] = useState(mainCompItems[1]);
    const [curr, setCurr] = useState(mainCompItems[2]);
    const [openCity, setOpenCity] = useState(false);
    const [openLang, setOpenLang] = useState(false);
    const [openCurr, setOpenCurr] = useState(false);
    const anchorRefCity = useRef();
    const anchorRefLang = useRef();
    const anchorRefCurr = useRef();

    let t3 = useRef(null);



    useEffect(() => {
        const t1 = gsap.timeline({ defaults: { ease: "power1.out" } });

        t1.fromTo(t3, { opacity: 0 }, { opacity: 1, duration: 1 });
    }, []);


    const handleToggle = (event) => {
        switch (event.currentTarget.id) {
            case 'CityBtn':
                console.log("toggled");
                setOpenCity((prevState) => !prevState);
                break;
            case 'LangBtn':
                setOpenLang((prevState) => !prevState);
                break;
            case 'CurrBtn':
                setOpenCurr((prevState) => !prevState);
                break;
            default:
                console.log('nothing');
                break;
        }

    };


    const handleClose = (event) => {

        switch (event.currentTarget.id) {
            case 'CityBtn':
                // if (anchorRefCity.current[0] && anchorRefCity.current[0].contains(event.target)) {
                //     return;
                // }
                setOpenCity(false);
                break;
            case 'LangBtn':
                setOpenLang(false);
                break;
            case 'CurrBtn':
                setOpenCurr(false);
                break;
            default:
                console.log('nothing');
                break;
        }
    };
    const handleOpen = (event) => {
        switch (event.currentTarget.id) {
            case 'CityBtn':
                setOpenCity(true);
                break;
            case 'LangBtn':
                setOpenLang(true);
                break;
            case 'CurrBtn':
                setOpenCurr(true);
                break;
            default:
                console.log('nothing');
                break;
        }
    };

    const handleClick = (event) => {
        switch (event.currentTarget.id) {
            case 'CityBtn':
                console.log("clicked");
                setCity(prevState => ({
                    ...prevState,
                    title: event.target.textContent,
                }));
                setOpenCity(false);
                break;
            case 'LangBtn':
                setLang(prevState => ({
                    ...prevState,
                    title: event.target.textContent,
                }));
                setOpenLang(false);
                break;
            case 'CurrBtn':
                setCurr(prevState => ({
                    ...prevState,
                    title: event.target.textContent,
                }));
                setOpenCurr(false);
                break;
            default:
                break;
        }
    }

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            switch (event.currentTarget.id) {
                case 'CityBtn':
                    setOpenLang(false);
                    break;
                case 'LangBtn':
                    setOpenLang(false);
                    break;
                case 'CurrBtn':
                    setOpenLang(false);
                    break;
                default:
                    console.log('nothing');
                    break;
            }
        }
    }

    return (
        <div style={{ position: 'sticky' }}>
            <nav className={styles.navBackground} ref={el => t3 = el}>
                <div className={styles.mainNav}>
                    <div>
                        <h5>
                            E-commerce platform
                        </h5>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-around', width: '18%' }}
                    >
                        {city ?
                            <div className={styles.chooseButtons}>

                                <Button
                                    id='CityBtn'
                                    ref={anchorRefCity}
                                    aria-controls={openCity ? 'City' : undefined}
                                    aria-haspopup="true"
                                    onMouseEnter={handleOpen}
                                    onMouseLeave={handleClose}
                                    onClick={handleToggle}
                                    className={styles.mainNavItems}
                                >
                                    {city.title}
                                    <RiArrowDropDownLine />
                                </Button>
                                <Popper open={openCity} anchorEl={anchorRefCity.current} role={undefined} transition disablePortal>
                                    {({ TransitionProps, placement }) => (
                                        <Grow
                                            {...TransitionProps}
                                            style={{
                                                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',

                                            }}
                                        >
                                            <Paper id='CityBtn' onMouseOver={handleOpen} onMouseLeave={handleClose}>
                                                <ClickAwayListener onClickAway={handleClose}>
                                                    <MenuList autoFocusItem={openCity}
                                                        id='City' onKeyDown={handleListKeyDown}>
                                                        {city.dropdowns.map((dropdown, index) => {
                                                            return (
                                                                <MenuItem key={index} id='CityBtn' onClick={handleClick}>
                                                                    {dropdown}
                                                                </MenuItem>)
                                                        })}
                                                    </MenuList>
                                                </ClickAwayListener>
                                            </Paper>
                                        </Grow>
                                    )}
                                </Popper>
                            </div>
                            : null}


                        {
                            lang ? <div className={styles.chooseButtons}>
                                <Button
                                    ref={anchorRefLang}
                                    id='LangBtn'
                                    aria-controls={openLang ? 'Lang' : undefined}
                                    aria-haspopup="true"
                                    onMouseEnter={handleOpen}
                                    onMouseLeave={handleClose}
                                    onClick={handleToggle}
                                    className={styles.mainNavItems}
                                >
                                    {lang.title}
                                    <RiArrowDropDownLine />
                                </Button>
                                <Popper open={openLang} anchorEl={anchorRefLang.current} role={undefined} transition disablePortal>
                                    {({ TransitionProps, placement }) => (
                                        <Grow
                                            {...TransitionProps}
                                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                        >
                                            <Paper id='LangBtn' onMouseOver={handleOpen} onMouseLeave={handleClose}>
                                                <ClickAwayListener onClickAway={handleClose}>
                                                    <MenuList autoFocusItem={openLang} id='Lang' onKeyDown={handleListKeyDown}>
                                                        {lang.dropdowns.map((dropdown, index) => {
                                                            return <MenuItem key={index} id='LangBtn' onClick={handleClick} >{dropdown}</MenuItem>
                                                        })}
                                                    </MenuList>
                                                </ClickAwayListener>
                                            </Paper>
                                        </Grow>
                                    )}
                                </Popper>
                            </div> : null
                        }

                        {curr ? <div className={styles.chooseButtons}>
                            <Button
                                className={styles.mainNavItems}
                                ref={anchorRefCurr}
                                id='CurrBtn'
                                aria-controls={openCurr ? 'Curr' : undefined}
                                aria-haspopup="true"
                                onMouseEnter={handleOpen}
                                onMouseLeave={handleClose}
                                onClick={handleToggle}
                            >
                                {curr.title}
                                <RiArrowDropDownLine />
                            </Button>
                            <Popper open={openCurr} anchorEl={anchorRefCurr.current} role={undefined} transition disablePortal>
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                        {...TransitionProps}
                                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                    >
                                        <Paper id='CurrBtn' onMouseOver={handleOpen} onMouseLeave={handleClose}>
                                            <ClickAwayListener onClickAway={handleClose}>
                                                <MenuList autoFocusItem={openCurr} id='Curr' onKeyDown={handleListKeyDown}>
                                                    {curr.dropdowns.map((dropdown, index) => {
                                                        return <MenuItem key={index} id='CurrBtn' onClick={handleClick}> {dropdown}</MenuItem>
                                                    })}
                                                </MenuList>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper>
                        </div> : null}
                    </div>


                    < ul className={styles.mainNavlinks} style={{ position: 'relative', left: '12%' }}  >
                        {mainBarItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={item.url} className={styles.mainNavItems} >
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
                    <ul className={styles.navrefs}>
                        <li><FaTelegram /></li>
                        <li><FaInstagram /></li>
                        <li><FaFacebookF /></li>
                        <li><RiYoutubeFill /></li>
                    </ul>
                </div>
            </nav >
        </div >
    )
}

export default MainNavBar;