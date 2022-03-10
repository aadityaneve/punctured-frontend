import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { DataContext } from './Context/DataContextProvider';
import DisplayCard from './Components/Card/DisplayCard';
import Navbar from './Components/Navbar/Navbar';
import BottomNav from './Components/BottomNav/BottomNav';
import { Grid } from '@mui/material';
import CartDetailPaper from './Components/CartDetails/CartDetailPaper';

function App() {
    const { punctureData } = React.useContext(DataContext);
    const [cartItems, setCartItems] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [checkOut, setCheckOut] = useState(false);

    useEffect(() => {
        if (checkOut) {
            setCartItems([]);
            alert('Checked Out Successfully.');
        }
    }, [checkOut]);

    return (
        <div className='App' style={{ margin: 'auto' }}>
            <Navbar cartItems={cartItems} setShowCart={setShowCart} />
            {showCart ? (
                <CartDetailPaper
                    cartItems={cartItems}
                    showCart={showCart}
                    setShowCart={setShowCart}
                    setCheckOut={setCheckOut}
                />
            ) : null}
            <Grid
                sx={{
                    gap: '1em',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '1.2em 0 4em 0',
                }}
                container
            >
                {punctureData.map((element, i) => {
                    return (
                        <Grid key={i} item>
                            <DisplayCard
                                element={element}
                                setCartItems={setCartItems}
                            />
                        </Grid>
                    );
                })}
            </Grid>
            <BottomNav />
        </div>
    );
}

export default App;
