import React from 'react'
import { Avatar, Box, Card } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Feedback() {
    return (
        <Card sx={{ maxWidth: 275 }}>
            <CardContent>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'initial',
                    alignItems: 'center',
                    mb: 2,
                }}>
                    <Box sx={{mr: 2}}>
                        <Avatar
                            alt="Remy Sharp"
                            src="https://mui.com/static/images/avatar/1.jpg"
                            sx={{ width: 65, height: 65 }}
                        />
                    </Box>
                    <Box>
                        <Typography sx={{
                            color: 'primary.main',
                            fontWeight: 'bold',
                        }}>
                            Name Name
                        </Typography>
                        <Typography   sx={{
                            color:'text.secondary',
                            fontWeight: 'bold',
                            fontSize: '12px',
                        }}>
                            CEO.company
                        </Typography>
                    </Box>
                </Box>
            <Typography variant="body2" sx={{
                fontSize: '12px',
            }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolores dolorem iusto, expedita rem repudiandae.
                </Typography>
            </CardContent>
        </Card>

    )
}

export default Feedback