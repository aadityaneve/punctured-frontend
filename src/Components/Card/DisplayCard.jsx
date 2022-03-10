import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Box } from '@mui/material';
import { DataContext } from '../../Context/DataContextProvider';
import Rating from '@mui/material/Rating';

import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
import DetailPaper from '../DetailPaper/DetailPaper';

const DisplayCard = ({ element, setCartItems }) => {
    let { shop_name, rating, location, discount, offering } = element;

    const [detailPopup, setDetailPopup] = useState(false);

    const handleDetails = () => {
        setDetailPopup((prevState) => !prevState);
    };

    const handleCart = (element) => {
        setCartItems((prevState) => [...prevState, element]);
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            {detailPopup ? (
                <DetailPaper
                    element={element}
                    detailPopup={detailPopup}
                    setDetailPopup={setDetailPopup}
                />
            ) : null}
            <CardMedia
                component='img'
                height='140'
                image='image.jpg'
                alt='green iguana'
            />
            <CardContent>
                <Typography
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                    }}
                    gutterBottom
                    variant='h5'
                    component='div'
                >
                    {shop_name}
                    <Rating name='read-only' value={rating} readOnly />
                </Typography>
                <Typography
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}
                    variant='body2'
                    color='text.secondary'
                >
                    <FmdGoodOutlinedIcon /> {location}
                    <LocalOfferOutlinedIcon /> {discount}
                    <CleaningServicesOutlinedIcon /> {offering}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={handleDetails} size='small'>
                    Details
                </Button>
                <Button onClick={() => handleCart(element)} size='small'>
                    Add Service
                </Button>
            </CardActions>
        </Card>
    );
};

export default DisplayCard;
