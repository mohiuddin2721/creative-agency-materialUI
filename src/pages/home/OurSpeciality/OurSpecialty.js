import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import EmailIcon from '@mui/icons-material/Email';
import { specialData } from './SpecialtyData';
import OurSpecialtyCard from './OurSpecialtyCard';
import { ourSpecialtyButtonSx, ourSpecialtySecondSectionTitleSx, ourSpecialtyTypographySx } from '../StyleHome/StyleHome';

function OurSpecialty() {
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <SectionTitle colored='Our specialty' sx={{ fontSize: '17px' }} />
        <SectionTitle title='We are a small agency of talented designers & developers' sx={ourSpecialtySecondSectionTitleSx} />
        <Typography sx={ourSpecialtyTypographySx}>
          Unlike teams from big agencies, we will treat your project as ours. We will walk you through our smooth and simple process.
        </Typography>
        <Button variant="contained" startIcon={<EmailIcon />} href="#contact" sx={ourSpecialtyButtonSx}>
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