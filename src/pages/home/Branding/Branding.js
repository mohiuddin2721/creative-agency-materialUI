import React from 'react'
import { styled } from '@mui/material/styles';
import { Box, Button, Stack, Typography } from '@mui/material';

const BrandingWrapper = styled(Box)(({ theme }) => ({
    height: '70vh',
    backgroundColor: 'rgba(122, 178, 89, 0.15)',
    padding: theme.spacing(4),
    margin: '4rem 0',
    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '5px',
}))

function Branding() {
    return (
        <BrandingWrapper>
            <Stack spacing={5}>
                <Typography sx={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    lineHeight: '1.2'
                }}>
                    Let's Grow Your <br />Brand To the <br />Next Level
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora hic modi, in ea repellat accusamus.
                </Typography>
                <Button sx={{
                    width: {
                        xs: '60%',
                        sm: '60%',
                        md: '50%',
                    }
                }}>Hire Us</Button>
            </Stack>
            <Box sx={{
                width: '50%',
                display: ['none', 'none', 'block'],
            }} >
                <img src="https://i.ibb.co/sPXVMbC/Frame.png" alt="Branding Pic" style={{
                    width: '100%'

                }} />
            </Box>
        </BrandingWrapper>
    )
}

export default Branding