import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


function OurSpecialtyCard({ item, i }) {
    return (
        <Grid container direction={`${(i / 2 === 0.5) ? 'row-reverse' : 'row'}`}>
            <Grid item xs={12} sm={12} md={6} sx={{
                display: 'flex',
                alignItems: 'center',
            }}>
                <Box>
                    <Typography sx={{ fontSize: '25px', fontWeight: '600' }}>{item?.title}</Typography>
                    <Typography>{item?.description}</Typography>
                    <Button variant='text' sx={{
                        textTransform: 'capitalize',
                        color: 'primary.green',
                    }}>
                        Learn more <ArrowRightAltIcon sx={{ ml: 2 }} />
                    </Button>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <img src={item?.image} alt="" style={{
                    width: '100%',
                }} />
            </Grid>
        </Grid>
    )
}

export default OurSpecialtyCard