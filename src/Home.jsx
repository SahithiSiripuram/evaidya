import React from 'react';
import {Typography, Container} from '@material-ui/core';
import Navbar from './Navbar';

const Home = () => {
    return(
        <>
            <Navbar/>
            <main>
            <div>
                <Container maxWidth="sm">
                    <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                        Hello world
                    </Typography>
                </Container>
            </div>
        </main>
        </>
    )
}
export default Home;
