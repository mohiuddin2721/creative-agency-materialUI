import React from 'react'
import { Box } from '@mui/material'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function OurWorks() {
    const [value, setValue] = React.useState(0);
    // console.log(value)

    const handleChange = (event, newValue) => {
        // console.log(newValue)
        setValue(newValue);
    };
    return (
        <Box sx={{ my: 5 }}>
            {/* Heading section */}
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <SectionTitle title='Here are some of' colored='our works' sx={{
                    textAlign: 'left',
                }} />
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
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
                        <Tab label="Item One" />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" />
                    </Tabs>
                    <Box>
                        <IconButton sx={{
                            border: '1px solid #959EAD',
                            mr: 2,
                        }}
                            onClick={() => setValue(value - 1)}
                            disabled={value === 0}
                        >
                            <ArrowBackIcon />
                        </IconButton>
                        <IconButton sx={{
                            border: '1px solid #959EAD'
                        }}
                            onClick={() => setValue(value + 1)}
                            disabled={value === 2}
                        >
                            <ArrowBackIcon sx={{
                                transform: 'rotate(180deg)'
                            }} />
                        </IconButton>
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

export default OurWorks