import React from 'react'
import { Card, Container, Row, CardGroup, Button } from 'react-bootstrap'
import Slider from "react-slick";
import Slide from './slide'


import ImgBook1 from '../../assets/Rectangle1.png'
import ImgBook2 from '../../assets/Rectangle2.png'
import ImgBook3 from '../../assets/Rectangle3.png'
import ListBook from './ListBook'

const CardSlide = () => {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
          };

    return (
        <>
            <Container fluid className='mt-5' >
                <h1 className='text-center' style={{ marginTop: '50px', fontWeight: 400 }}>
                    With us, you can shop online & help
                </h1>
                <h1 className='text-center' style={{ fontWeight: 400, marginBottom: '100px' }}>
                    save your high street at the same time
                </h1>
                
                <Slide />
            
                <ListBook />

            </Container>
        </>
    )
}

export default CardSlide
