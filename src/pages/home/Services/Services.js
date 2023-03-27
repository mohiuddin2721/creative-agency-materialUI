import { Box, Grid } from '@mui/material';
import React from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Service from '../../../components/Service/Service';
import { serviceData } from './ServiceData';

function Services() {
    return (
        <Box>
            <SectionTitle title={'Provide awesome'} colored={'Service'} />

            <Grid container spacing={2}>
                {
                    serviceData?.map((data, i) =>
                        <Grid item key={i} xs={12} sm={6} md={4}>
                            <Service key={i} data={data} />
                        </Grid>)
                }

            </Grid>
        </Box>
    )
}

export default Services;