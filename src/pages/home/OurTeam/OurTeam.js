import React from 'react';
import { Box } from '@mui/material';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { OurTeamData } from './OurTeamData';

function OurTeam() {
  return (
    <Box>
      <SectionTitle colored='OUR TEAM' sx={{ fontSize: '17px' }} />
      <SectionTitle title='Trust the professionals' />
      <Box sx={{
        width: {
          xs: 'auto',
          sm: 'auto',
          md: 500,
          lg: 800,
        },
        height: 450,
        overflowY: 'scroll',
        overflowX: 'hidden',
        mx: 'auto',
      }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {OurTeamData?.map((item, i) => (
            <ImageListItem key={i}>
              <img
                src={`${item.pic}?w=248&fit=crop&auto=format`}
                srcSet={`${item.pic}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.name}
                loading="lazy"
              />
              <ImageListItemBar position="below" title={item.position} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  )
}

export default OurTeam