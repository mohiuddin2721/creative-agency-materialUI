import { Button, FormControl, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'

function Contact() {
    return (
        <Box id='contact'>
            <Grid container spacing={2}
                sx={{
                    backgroundColor: 'rgba(122, 178, 89, 0.15)',
                    minHeight: '70vh',
                    borderRadius: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 5,
                    my: 8,
                    mx: 'auto',
                }}>
                <Grid item xs={12} sm={12} md={6}>
                    <Typography sx={{
                        fontSize: '25px',
                        fontWeight: 'bold',
                        pb: 4,
                        lineHeight: 1.2
                    }}>
                        Let us handle your
                        <br />project,
                        <br />professionally.
                    </Typography>
                    <Typography sx={{
                        fontSize: '15px',
                        lineHeight: 1.2
                    }}>
                        With well written codes, we build <br />amazing apps for all platforms, mobile <br />and web apps in general.
                    </Typography>
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