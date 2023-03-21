import React from 'react';
import { Box, Grid } from '@mui/material';
import Feedback from '../../../components/Feedback/Feedback';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { FeedbackData } from '../FeedbackData/FeedbackData';

function ClientFeedback() {
    return (
        <Box sx={{
            my: 10,
        }}>
            <Box sx={{
                mb: 4,
            }}>
                <SectionTitle title='Clients' colored='Feedback' />
            </Box>

            <Grid container spacing={2}>
                {
                    FeedbackData.map((data, i) => (
                        <Grid item xs={12} sm={6} md={4}>
                            <Feedback key={i} data={data} />
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default ClientFeedback