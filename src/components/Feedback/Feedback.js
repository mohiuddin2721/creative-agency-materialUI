import React from 'react'
import { Avatar, Box, Card } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Feedback({ data }) {
    const { name, position, description, pic } = data;
    return (
        <Card sx={{ maxWidth: 375 }}>
            <CardContent>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'initial',
                    alignItems: 'center',
                    mb: 2,
                }}>
                    <Box sx={{ mr: 2 }}>
                        <Avatar
                            alt="Remy Sharp"
                            src={pic}
                            sx={{ width: 65, height: 65 }}
                        />
                    </Box>
                    <Box>
                        <Typography sx={{
                            color: 'primary.main',
                            fontWeight: 'bold',
                        }}>
                            {name}
                        </Typography>
                        <Typography sx={{
                            color: 'text.secondary',
                            fontWeight: 'bold',
                            fontSize: '12px',
                        }}>
                            {position}
                        </Typography>
                    </Box>
                </Box>
                <Typography variant="body2" sx={{
                    fontSize: '15px',
                }}>
                    {description}
                </Typography>
            </CardContent>
        </Card>

    )
}

export default Feedback