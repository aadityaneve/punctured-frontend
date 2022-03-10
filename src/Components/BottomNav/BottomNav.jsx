import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box } from '@mui/material';
import MenuItems from './MenuItems';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

export default function BottomNav() {
    const [value, setValue] = React.useState('recents');
    const [locationMenuItem, setLocationMenuItem] = React.useState(false);
    const [ratingMenuItem, setRatingMenuItem] = React.useState(false);
    const [discountMenuItem, setDiscountMenuItem] = React.useState(false);
    const [onlinePaymentMenuItem, setOnlinePaymentMenuItem] =
        React.useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const location = ['Delhi', 'Mumbai', 'Pune', 'Bangalore', 'Hyderabad'];
    const offering = ['Free Oiling', 'Free Washing', 'Free Air Fill'];
    const onlinePayment = ['Yes', 'No'];
    const rating = [
        'Above 1 ⭐',
        'Above 2 ⭐',
        'Above 3 ⭐',
        'Above 4 ⭐',
        'Above 5 ⭐',
    ];
    const discount = [
        'Above 10%',
        'Above 20%',
        'Above 33%',
        'Above 40%',
        'Above 50%',
    ];

    return (
        <>
            <BottomNavigation
                sx={{ position: 'sticky', bottom: 0 }}
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction
                    label='Location'
                    value='Location'
                    icon={<LocationOnIcon />}
                    onClick={() => {
                        setLocationMenuItem(true);
                    }}
                />
                <MenuItems
                    array={location}
                    showMenuItem={locationMenuItem}
                    setShowMenuItem={setLocationMenuItem}
                />

                <BottomNavigationAction
                    label='Rating'
                    value='Rating'
                    icon={<GradeOutlinedIcon />}
                    onClick={() => {
                        setRatingMenuItem(true);
                    }}
                />
                <MenuItems
                    array={rating}
                    showMenuItem={ratingMenuItem}
                    setShowMenuItem={setRatingMenuItem}
                />

                <BottomNavigationAction
                    label='Discount'
                    value='Discount'
                    icon={<DiscountOutlinedIcon />}
                    onClick={() => {
                        setDiscountMenuItem(true);
                    }}
                />
                <MenuItems
                    array={discount}
                    showMenuItem={discountMenuItem}
                    setShowMenuItem={setDiscountMenuItem}
                />

                <BottomNavigationAction
                    label='Online Payment'
                    value='Online Payment'
                    icon={<AccountBalanceWalletOutlinedIcon />}
                    onClick={() => {
                        setOnlinePaymentMenuItem(true);
                    }}
                />
                <MenuItems
                    array={onlinePayment}
                    showMenuItem={onlinePaymentMenuItem}
                    setShowMenuItem={setOnlinePaymentMenuItem}
                />
            </BottomNavigation>
        </>
    );
}
