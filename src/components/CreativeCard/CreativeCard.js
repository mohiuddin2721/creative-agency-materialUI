import React from 'react'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Card, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from '@emotion/react';

function CreativeCard() {
    const theme = useTheme();
    return (
        <Card sx={{ maxWidth: 345, p: 2, borderRadius: '10px' }}>
            <CardMedia
                sx={{ height: 190 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
                style={{
                    borderRadius: '10px'
                }}
            />
            <CardContent sx={{
                p: 0,
                pb: 0,
                pt: 4,
                '&:last-child': {
                    pb: 0,
                },
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <Box>
                    <Typography gutterBottom variant="body" component="div" color='text.secondary'>
                        Web design
                    </Typography>
                    <Typography variant="body2" color="primary.main" fontWeight={600} fontSize={20}>
                        Web design research
                    </Typography>
                </Box>
                <IconButton sx={{
                    border: `1px solid ${theme.palette.main}`,
                    height: '30px',
                    width: '30px',
                    '& svg': {
                        color: 'primary.main'
                    }
                }}>
                    <AddIcon />
                </IconButton>
            </CardContent>
        </Card>
    )
}

export default CreativeCard