import React from 'react'
import { Box } from '@mui/material'
import { styled } from '@mui/system';
import { BrandsWrapper } from '../StyleHome/StyleHome';

const brands = [
    'https://i.ibb.co/27wHw8Y/image-5.png',
    'https://i.ibb.co/vVSVd76/image-6.png',
    'https://i.ibb.co/Dwj3KYc/image-7.png',
    'https://i.ibb.co/99gcp3b/image-8.png',
    'https://i.ibb.co/Rhk2VSh/image-9.png',
 ];

function Brands() {
  return (
    <BrandsWrapper>
        {
            brands.map((brand, i) => <img key={i} src={brand} alt='Brands' />)
        }
    </BrandsWrapper>
  )
}

export default Brands