import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
// import { Link } from "react-router-dom";

import convertRupiah from "rupiah-format";

import bookProduct from '../../fakeData/bookProduct'

export default function CardBook({ item }) {
    return (
        <Container>
            <Row>
                {bookProduct.map((item, index) => (

                    <Col md={3} style={{marginBottom: '40px'}}>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img style={{
                                height : '300px'
                            }} variant="top" src={item.image} />
                            <Card.Body>
                                <Card.Title style = {{ fontSize : '24px', fontFamily: 'Times New Roman', fontWeight:'700'}}>
                                    {item.name}
                                </Card.Title>
                                <Card.Text>
                                    <i className="text-muted" style = {{ fontSize : '16px', fontWeight:'400'}}>
                                        {item.author}
                                    </i>
                                </Card.Text>
                                <Card.Title style={{color : '#44B200'}}>
                                    {convertRupiah.convert(item.price)}
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}


