import React, { useState, useRef } from 'react';
import { Button, MenuItem, Paper, Grow, ClickAwayListener, MenuList, Popper } from '@material-ui/core';
import { mainCompItems } from './navBarItems';
import { RiArrowDropDownLine } from 'react-icons/ri';


export const NavBars = () => {
    const [state, setState] = useState(mainCompItems);
    const [open, setOpen] = useState([false]);
    const anchorRef = useRef([null]);


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

    const values = [
        'city',
        'lang',
        'currency'
    ]

    return (
        state.map(item, index) => {
    return <div>
        <Button
            ref={anchorRef}
            aria-controls={open ? `${values[index]}` : undefined}
            aria-haspopup="true"
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
            onClick={handleToggle}
        >
            {item.title}
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
                            <MenuList autoFocusItem={open} id={`${values[index]}`} onKeyDown={handleListKeyDown}>
                                {item.dropdowns.map((dropdown, index) => {
                                    return <MenuItem key={index} onClick={handleClick} >{dropdown}</MenuItem>
                                })}
                            </MenuList>
                        </ClickAwayListener>
                    </Paper>
                </Grow>
            )}
        </Popper>
    </div>

})
)


}