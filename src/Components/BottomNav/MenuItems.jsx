import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { DataContext } from '../../Context/DataContextProvider';

export default function MenuItems({ array, showMenuItem, setShowMenuItem }) {
    /* const [anchorEl, setAnchorEl] = React.useState(null);
    const showMenuItem = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }; */

    const { setToFilter } = React.useContext(DataContext);

    const handleClose = (item) => {
        setToFilter(item);
        setShowMenuItem(false);
    };

    return (
        <Menu
            // sx={{ zIndex: 1, bottom: '1em' }}
            id='basic-menu'
            anchorEl={showMenuItem}
            open={showMenuItem}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
            anchorOrigin={{
                vertical: 'center',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'center',
                horizontal: 'center',
            }}
        >
            {array.map((item, i) => (
                <MenuItem key={i} onClick={() => handleClose(item)}>
                    {item}
                </MenuItem>
            ))}
            {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem> */}
        </Menu>
    );
}
