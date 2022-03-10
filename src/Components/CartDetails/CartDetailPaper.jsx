import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';

import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';

export default function CartDetailPaper({
    cartItems,
    showCart,
    setShowCart,
    setCheckOut,
}) {
    // let { shop_name, rating, location, discount, offering } = element;

    return (
        <>
            <Box
                sx={{
                    overflowY: showCart ? 'hidden' : 'scroll',
                    position: 'absolute',
                    zIndex: 1,
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    marginTop: '-50px',
                    marginLeft: '-100px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    verticalAlign: 'center',
                    justifyContent: 'center',
                    width: '85%',
                    margin: 'auto',
                    '& > :not(style)': {
                        m: 1,
                        width: '70vw',
                        height: '75vh',
                        margin: 'auto',
                    },
                }}
            >
                <Paper
                    elevation={3}
                    sx={{ position: 'relative', overflowY: 'scroll' }}
                >
                    <Button
                        onClick={() => setShowCart((prevState) => !prevState)}
                        sx={{
                            position: 'absolute',
                            zIndex: 2,
                            top: '15px',
                            right: '15px',
                        }}
                        variant='outlined'
                        color='secondary'
                    >
                        X
                    </Button>
                    <Button
                        sx={{
                            position: 'absolute',
                            zIndex: 2,
                            top: '15px',
                            left: '15px',
                        }}
                        variant='contained'
                        color='success'
                        onClick={() => setCheckOut(true)}
                    >
                        Check Out
                    </Button>
                    {cartItems.map(
                        ({
                            shop_name,
                            rating,
                            location,
                            discount,
                            offering,
                        }) => (
                            <Paper
                                elevation={1}
                                sx={{
                                    marginTop: '80px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 2,
                                }}
                            >
                                <Typography variant='h4' component='div'>
                                    {shop_name}
                                </Typography>
                                <Typography variant='h5' component='div'>
                                    <Rating
                                        name='read-only'
                                        value={rating}
                                        readOnly
                                    />
                                </Typography>
                                <Typography variant='h5' component='div'>
                                    <FmdGoodOutlinedIcon /> {location}
                                </Typography>
                                <Typography variant='h5' component='div'>
                                    <LocalOfferOutlinedIcon /> {discount}
                                </Typography>
                                <Typography variant='h5' component='div'>
                                    <CleaningServicesOutlinedIcon /> {offering}
                                </Typography>
                            </Paper>
                        )
                    )}
                </Paper>
            </Box>
        </>
    );
}
