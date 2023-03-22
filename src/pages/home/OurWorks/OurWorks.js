import React from 'react';
import { Box, Grid } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CreativeCard from '../../../components/CreativeCard/CreativeCard';
import { cardData } from '../OurWork/OurWork';

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
                // display: 'flex',
                // alignItems: 'center',
                // justifyContent: 'space-between',
                mb: 3,
            }}>
                <Grid item xs={12} sm={12} md={6}>
                    <SectionTitle title='Here are some of' colored='our works' sx={{
                        textAlign: 'left',
                    }} />
                </Grid>
                <Grid
                    item xs={12} sm={12} md={6}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <Tabs value={value} onChange={handleChange} centered sx={{
                                '& .MuiTabs-indicator': {
                                    display: 'none'
                                },
                                '& .Mui-selected': {
                                    color: 'primary.green',
                                    fontWeight: 'bold',
                                },
                                '& .MuiButtonBase-root': {
                                    textTransform: 'capitalize',
                                }
                            }}>
                                <Tab label="All" />
                                <Tab label="Web design" />
                                <Tab label="Mobile app" />
                            </Tabs>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
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
                    {/* 
                    <Box>
                        
                    </Box> */}
                </Grid>
            </Grid>

            {/* Creative part */}
            <Grid container spacing={3} justifyContent='center'>
                {
                    cardData[value].map((image) => (
                        <Grid item xs={12} sm={6} md={4} >
                            <CreativeCard image={image} />
                        </Grid>
                    ))
                }

            </Grid>
        </Box>
    )
}

export default OurWorks