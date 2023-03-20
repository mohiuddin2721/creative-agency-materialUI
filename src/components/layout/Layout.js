import { Box } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = () => {
    return (
        <Box>
            <Container>
                <Header />   
                <Outlet /> 
            </Container> 
            <Footer />
        </Box>
    );
};

export default Layout;