import React from 'react';
import { Box } from '@mui/material';
import Feedback from '../../../components/Feedback/Feedback';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

function ClientFeedback() {
  return (
    <Box  sx={{
        mb: 6,
    }}>
        <Box sx={{
            mb: 4,
        }}>
            <SectionTitle title='Clients' colored='Feedback' />
        </Box>
        <Feedback />
    </Box>
  )
}

export default ClientFeedback