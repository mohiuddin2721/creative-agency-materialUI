import { Outlet } from '@mui/icons-material';
import { Box } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import Header from '../Header/Header';

const Layout = () => {
    return (
        <Box>
            <Container>
                <Header />   
                {/* <Outlet />  */}
            </Container> 
        </Box>
    );
};

export default Layout;