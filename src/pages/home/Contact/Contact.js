import { Button, FormControl, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

function Contact() {
    return (
        <Box id='contact' sx={{
            backgroundColor: 'rgba(122, 178, 89, 0.15)',
        }}>
            
            <SectionTitle title='Let us handle your project,' colored='professionally.' sx={{pt: 6}} />
            <Typography sx={{
                fontSize: '15px',
                textAlign: 'center',
                
            }}>
                With well written codes, we build amazing apps for all platforms, mobile and web apps in general.
            </Typography>
            <Grid container spacing={2}
                sx={{
                    minHeight: '70vh',
                    borderRadius: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 5,
                    mb: 8,
                    mx: 'auto',
                }}>
                <Grid item xs={12} sm={12} md={6}>
                    <img src="https://i.ibb.co/fnnsqjN/4220713-removebg-preview.png" alt="" />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <FormControl sx={{
                        width: '100%',
                        border: 'none',
                    }}>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Email Address"
                            sx={{
                                width: '90%',
                                backgroundColor: '#ffff',
                            }}
                        />
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Address"
                            sx={{
                                width: '90%',
                                mt: 2,
                                backgroundColor: '#ffff',
                            }}
                        />
                        <TextField
                            id="standard-multiline-static"
                            multiline
                            rows={4}
                            defaultValue="Your Message"
                            variant="standard"
                            sx={{
                                width: '90%',
                                my: 2,
                                backgroundColor: '#ffff',
                                border: 'none',
                                p: 2
                            }}
                        />
                        <Button sx={{ width: '20%', backgroundColor: 'primary.green' }}>SEND</Button>
                    </FormControl>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Contact;