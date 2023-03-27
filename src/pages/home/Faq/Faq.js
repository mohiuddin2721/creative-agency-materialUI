import { Box } from '@mui/material'
import React from 'react'
import CreativeAccordion from '../../../components/CreativeAccordion/CreativeAccordion'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import { faqInnerBoxSx, faqMainBoxSx } from '../StyleHome/StyleHome'


function Faq() {
    return (
        <Box id='faq' sx={faqMainBoxSx}>
            <SectionTitle title='Frequently asked' colored='question' />
            <Box sx={faqInnerBoxSx}>
                <CreativeAccordion
                    title='How do I pay for the Essentials or Premium plan?'
                    description='You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.'
                />
                <CreativeAccordion
                    title='How do I pay for the Essentials or Premium plan?'
                    description='You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.'
                />
                <CreativeAccordion
                    title='How do I pay for the Essentials or Premium plan?'
                    description='You can pay with a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.'
                />
            </Box>
        </Box>
    )
}

export default Faq