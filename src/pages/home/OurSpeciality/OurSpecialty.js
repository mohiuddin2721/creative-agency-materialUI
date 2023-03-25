import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import EmailIcon from '@mui/icons-material/Email';
import { specialData } from './SpecialtyData';
import OurSpecialtyCard from './OurSpecialtyCard';

function OurSpecialty() {
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <SectionTitle colored='Our specialty' sx={{ fontSize: '17px' }} />
        <SectionTitle title='We are a small agency of talented designers & developers' sx={{
          fontSize: {
            xs: '20px',
            sm: '20px',
            md: '34px',
          },
        }} />
        <Typography sx={{
          fontSize: {
            xs: '16px',
            sm: '16px',
            md: '20px',
          },
        }}>
          Unlike teams from big agencies, we will treat your project as ours. We will walk you through our smooth and simple process.
        </Typography>
        <Button variant="contained" startIcon={<EmailIcon />} href="#contact" sx={{
          bgcolor: 'primary.green',
          mt: 2,
          px: 0,
          display: 'flex',
          mx: 'auto',
          textTransform: 'capitalize',
          width: {
            xs: '50%',
            sm: '50%',
            md: '30%',
            lg: '15%',
          },
          fontSize: {
            xs: '15px',
            sm: '15px',
          },
        }}>
          Contact us
        </Button>
      </Box>
      <Box sx={{ mb: 10 }}>
        {
          specialData?.map((item, i) => (
            <OurSpecialtyCard key={i} item={item} i={i} />
          ))
        }
      </Box>
    </Box>
  )
}

export default OurSpecialty