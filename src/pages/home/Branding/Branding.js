import React, { useEffect, useRef } from 'react'
import { Box, Button, Stack, Typography } from '@mui/material';
import gsap, { Power3 } from 'gsap';
import { BrandingWrapper } from '../StyleHome/StyleHome';

function Branding() {
    let imageItem = useRef(null)
    let textItem = useRef(null)
    let descriptionItem = useRef(null)
    let buttonItem = useRef(null)

    useEffect(() => {
        gsap.to(
            imageItem,
            1,
            {
                opacity: 1,
                y: -30,
                ease: Power3.easeOut,
                delay: .4,
            }
        )
        gsap.to(
            textItem,
            1,
            {
                opacity: 1,
                y: -30,
                ease: Power3.easeOut,
                delay: .8,
            }
        )
        gsap.to(
            descriptionItem,
            1,
            {
                opacity: 1,
                y: -30,
                ease: Power3.easeOut,
                delay: 1,
            }
        )
        gsap.to(
            buttonItem,
            1,
            {
                opacity: 1,
                y: -30,
                ease: Power3.easeOut,
                delay: 1.2,
            }
        )
    }, [])

    return (
        <BrandingWrapper>
            <Stack spacing={5}>
                <Typography sx={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    lineHeight: '1.2',
                    opacity: 0,
                }}
                    ref={el => { textItem = el }}
                >
                    Let's Grow Your <br />Brand To the <br />Next Level
                </Typography>
                <Typography
                    ref={el => { descriptionItem = el }}
                    sx={{
                        opacity: 0,
                    }}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora hic modi, in ea repellat accusamus.
                </Typography>
                <Button
                    ref={el => { buttonItem = el }}
                    sx={{
                        width: {
                            xs: '60%',
                            sm: '60%',
                            md: '50%',
                        },
                        opacity: 0,
                    }}>Hire Us</Button>
            </Stack>
            <Box sx={{
                width: '50%',
                display: ['none', 'none', 'block'],
            }} >
                <img
                    ref={el => { imageItem = el }}
                    src="https://i.ibb.co/sPXVMbC/Frame.png"
                    alt="Branding Pic"
                    style={{
                        width: '100%',
                        opacity: 0,
                    }} />
            </Box>
        </BrandingWrapper>
    )
}

export default Branding