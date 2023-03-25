import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import EmailIcon from '@mui/icons-material/Email';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { specialData } from './SpecialtyData';

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
            <Grid container key={i} direction={`${(i / 2 === 0.5) ? 'row-reverse' : 'row'}`}>
              <Grid items xs={12} sm={12} md={6} sx={{
                display: 'flex',
                alignItems: 'center',
              }}>
                <Box sx={{}}>
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
              <Grid items xs={12} sm={12} md={6}>
                <img src={item?.image} alt="" style={{
                  width: '100%',
                }} />
              </Grid>
            </Grid>
          ))
        }
      </Box>
    </Box>
  )
}

export default OurSpecialty