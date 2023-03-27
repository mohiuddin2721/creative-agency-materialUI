import React from 'react';
import { Box, Grid } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CreativeCard from '../../../components/CreativeCard/CreativeCard';
import { cardData } from '../OurWork/OurWork';
import { ourWorkGridItemSx, ourWorkTabSx } from '../StyleHome/StyleHome';


function OurWorks() {
    const [value, setValue] = React.useState(0);
    // console.log(value)

    const handleChange = (event, newValue) => {
        // console.log(newValue)
        setValue(newValue);
    };
    return (
        <Box sx={{ my: 5 }} id='service'>
            {/* Heading section */}
            <Grid container sx={{
                mb: 3,
            }}>
                <Grid item xs={12} sm={12} md={6}>
                    <SectionTitle title='Here are some of' colored='our works' sx={{
                        textAlign: 'left',
                    }} />
                </Grid>
                <Grid
                    item xs={12} sm={12} md={6}
                    sx={ourWorkGridItemSx}
                >
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6}
                            sx={ourWorkGridItemSx}>
                            <Tabs value={value} onChange={handleChange} centered sx={ourWorkTabSx}>
                                <Tab label="All" />
                                <Tab label="Web design" />
                                <Tab label="Mobile app" />
                            </Tabs>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}
                            sx={ourWorkGridItemSx}>
                            <IconButton sx={{
                                // border: '1px solid #959EAD',
                                border: theme => `1px solid ${value === 0 ? '#959EAD' : theme.palette.primary.main}`,
                                mr: 2,
                                color: 'primary.main',
                            }}
                                onClick={() => setValue(value - 1)}
                                disabled={value === 0}
                            >
                                <ArrowBackIcon />
                            </IconButton>
                            <IconButton sx={{
                                // border: '1px solid #959EAD'
                                border: theme => `1px solid ${value === 2 ? '#959EAD' : theme.palette.primary.main}`,
                            }}
                                onClick={() => setValue(value + 1)}
                                disabled={value === 2}
                            >
                                <ArrowBackIcon sx={{
                                    transform: 'rotate(180deg)'
                                }} />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {/* Creative part */}
            <Grid container spacing={3} justifyContent='center'>
                {
                    cardData[value].map((image, i) => (
                        <Grid item key={i} xs={12} sm={6} md={4} >
                            <CreativeCard image={image} />
                        </Grid>
                    ))
                }

            </Grid>
        </Box>
    )
}

export default OurWorks