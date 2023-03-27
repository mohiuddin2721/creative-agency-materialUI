import { Button, FormControl, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { contactGridSx, contactTextFieldSx, contactTypographySx } from '../StyleHome/StyleHome';


function Contact() {
    return (
        <Box id='contact' sx={{
            backgroundColor: 'rgba(122, 178, 89, 0.15)',
        }}>

            <SectionTitle title='Let us handle your project,' colored='professionally.' sx={{ pt: 6 }} />
            <Typography sx={contactTypographySx}>
                With well written codes, we build amazing apps for all platforms, mobile and web apps in general.
            </Typography>
            <Grid container spacing={2}
                sx={contactGridSx}>
                <Grid item xs={12} sm={12} md={6}>
                    <img src="https://i.ibb.co/fnnsqjN/4220713-removebg-preview.png" alt="" style={{
                        width: '100%',
                    }} />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <FormControl sx={{
                        width: '100%',
                        border: 'none',
                    }}>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Email Address"
                            sx={contactTextFieldSx.TextFieldSx_1}
                        />
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Address"
                            sx={contactTextFieldSx.TextFieldSx_2}
                        />
                        <TextField
                            id="standard-multiline-static"
                            multiline
                            rows={4}
                            defaultValue="Your Message"
                            variant="standard"
                            sx={contactTextFieldSx.TextFieldSx_3}
                        />
                        <Button sx={{ width: '20%', backgroundColor: 'primary.green' }}>SEND</Button>
                    </FormControl>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Contact;