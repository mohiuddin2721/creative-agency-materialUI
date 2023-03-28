import gsap, { Power3 } from 'gsap';
import React, { useRef, useState } from 'react';
import { BrandsWrapper } from '../StyleHome/StyleHome';


function Brands() {
  const [image_1, setImage_1] = useState(false)
  const [image_2, setImage_2] = useState(false)
  const [image_3, setImage_3] = useState(false)
  const [image_4, setImage_4] = useState(false)
  const [image_5, setImage_5] = useState(false)

  let imageItem_1 = useRef(null)
  let imageItem_2 = useRef(null)
  let imageItem_3 = useRef(null)
  let imageItem_4 = useRef(null)
  let imageItem_5 = useRef(null)

  const handleExpand_1 = () => {
    gsap.to(imageItem_1, .8, { width: 310, height: 75, ease: Power3.easeOut })
    setImage_1(true);
    gsap.to(imageItem_2, .8, { width: 175, height: 60, ease: Power3.easeOut })
    gsap.to(imageItem_3, .8, { width: 106, height: 60, ease: Power3.easeOut })
    gsap.to(imageItem_4, .8, { width: 107, height: 60, ease: Power3.easeOut })
    gsap.to(imageItem_5, .8, { width: 189, height: 60, ease: Power3.easeOut })
  }
  const handleExpand_2 = () => {
    gsap.to(imageItem_2, .8, { width: 253, height: 75, ease: Power3.easeOut })
    setImage_2(true);
    gsap.to(imageItem_1, .8, { width: 233, height: 60, ease: Power3.easeOut })
    gsap.to(imageItem_3, .8, { width: 106, height: 60, ease: Power3.easeOut })
    gsap.to(imageItem_4, .8, { width: 107, height: 60, ease: Power3.easeOut })
    gsap.to(imageItem_5, .8, { width: 189, height: 60, ease: Power3.easeOut })
  }
  const handleExpand_3 = () => {
    gsap.to(imageItem_3, .8, { width: 184, height: 75, ease: Power3.easeOut })
    setImage_3(true);
    gsap.to(imageItem_1, .8, { width: 233, height: 60, ease: Power3.easeOut })
    gsap.to(imageItem_2, .8, { width: 175, height: 60, ease: Power3.easeOut })
    gsap.to(imageItem_4, .8, { width: 107, height: 60, ease: Power3.easeOut })
    gsap.to(imageItem_5, .8, { width: 189, height: 60, ease: Power3.easeOut })
  }
  const handleExpand_4 = () => {
    gsap.to(imageItem_4, .8, { width: 185, height: 75, ease: Power3.easeOut })
    setImage_4(true);
    gsap.to(imageItem_1, .8, { width: 233, height: 60, ease: Power3.easeOut })
    gsap.to(imageItem_2, .8, { width: 175, height: 60, ease: Power3.easeOut })
    gsap.to(imageItem_3, .8, { width: 106, height: 60, ease: Power3.easeOut })
    gsap.to(imageItem_5, .8, { width: 189, height: 60, ease: Power3.easeOut })
  }
  const handleExpand_5 = () => {
    gsap.to(imageItem_5, .8, { width: 267, height: 75, ease: Power3.easeOut })
    setImage_5(true);
    gsap.to(imageItem_1, .8, { width: 233, height: 60, ease: Power3.easeOut })
    gsap.to(imageItem_2, .8, { width: 175, height: 60, ease: Power3.easeOut })
    gsap.to(imageItem_3, .8, { width: 106, height: 60, ease: Power3.easeOut })
    gsap.to(imageItem_4, .8, { width: 107, height: 60, ease: Power3.easeOut })
  }


  const handleShrink_1 = () => {
    gsap.to(imageItem_1, .8, { width: 233, height: 60, ease: Power3.easeOut })
    setImage_1(false);
  }
  const handleShrink_2 = () => {
    gsap.to(imageItem_2, .8, { width: 175, height: 60, ease: Power3.easeOut })
    setImage_2(false);
  }
  const handleShrink_3 = () => {
    gsap.to(imageItem_3, .8, { width: 106, height: 60, ease: Power3.easeOut })
    setImage_3(false);
  }
  const handleShrink_4 = () => {
    gsap.to(imageItem_4, .8, { width: 107, height: 60, ease: Power3.easeOut })
    setImage_4(false);
  }
  const handleShrink_5 = () => {
    gsap.to(imageItem_5, .8, { width: 189, height: 60, ease: Power3.easeOut })
    setImage_5(false);
  }

  return (
    <BrandsWrapper>
      <img
        onClick={image_1 !== true ? handleExpand_1 : handleShrink_1}
        ref={el => { imageItem_1 = el }}
        src='https://i.ibb.co/27wHw8Y/image-5.png'
        alt='Brands'
      />
      <img
        onClick={image_2 !== true ? handleExpand_2 : handleShrink_2}
        ref={el => { imageItem_2 = el }}
        src='https://i.ibb.co/vVSVd76/image-6.png'
        alt='Brands'
      />
      <img
        onClick={image_3 !== true ? handleExpand_3 : handleShrink_3}
        ref={el => { imageItem_3 = el }}
        src='https://i.ibb.co/Dwj3KYc/image-7.png'
        alt='Brands'
      />
      <img
        onClick={image_4 !== true ? handleExpand_4 : handleShrink_4}
        ref={el => { imageItem_4 = el }}
        src='https://i.ibb.co/99gcp3b/image-8.png'
        alt='Brands'
      />
      <img
        onClick={image_5 !== true ? handleExpand_5 : handleShrink_5}
        ref={el => { imageItem_5 = el }}
        src='https://i.ibb.co/Rhk2VSh/image-9.png'
        alt='Brands'
      />
    </BrandsWrapper>
    // <BrandsWrapper>
    //   {
    //     brands.map((brand, i) =>
    //       <img
    //         key={i}
    //         src={brand}
    //         alt='Brands' />)
    //   }
    // </BrandsWrapper>
  )
}

export default Brands