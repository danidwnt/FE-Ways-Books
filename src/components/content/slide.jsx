import React, { Component } from "react";
import Slider from "react-slick";
import { Button, Card, Row, Col } from "react-bootstrap";

import convertRupiah from "rupiah-format";

import bookProduct from '../../fakeData/bookProduct'

export default class MultipleItems extends Component {

    render() {
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true
        };
        return (
            <div>
                <>
                    <Row>
                        <Slider {...settings}>
                            {bookProduct.map((item, index) => (
                                <Col>

                                    <Card style={{ width: '30rem'}}>
                                        <Row>
                                            <Col>
                                                <Card.Img variant="top" src={item.image} style={{height : '100%'}} />
                                            </Col>
                                            <Col>

                                                <Card.Body className="pt-4 pb-4">
                                                    <Card.Title style = {{ fontSize : '24px', fontFamily: 'Times New Roman', fontWeight:'700'}}>
                                                        {item.name}
                                                    </Card.Title>
                                                    <Card.Text>
                                                        <i className="text-muted" style={{ fontSize: '16px', fontWeight: '400' }}>
                                                            {item.author}
                                                        </i>
                                                    </Card.Text>
                                                    <Card.Text>
                                                        {item.desc}
                                                    </Card.Text>

                                                    <Card.Title style={{ color: '#44B200' }}>
                                                        {convertRupiah.convert(item.price)}
                                                    </Card.Title>
                                                    <Button
                                                        style={{ width: '100%' }}
                                                        variant='dark'>
                                                        Add to Cart
                                                    </Button>
                                                </Card.Body>
                                            </Col>
                                        </Row>
                                    </Card>


                                   
                                </Col>
                            ))}


                        </Slider>
                    </Row>
                </>
            </div>
        );
    }
}
