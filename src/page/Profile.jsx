import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavbarUser from '../components/NavbarUser'

import ImgProfile from '../assets/Rectangle12.png'
import { IoMailSharp } from 'react-icons/io5'
import { BsGenderAmbiguous } from 'react-icons/bs'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { SiGooglemaps } from 'react-icons/si'

import ListBook1 from '../assets/ListBook1.png'
import ListBook2 from '../assets/Rectangle1.png'

export default function Profile() {

    
    const title = "Profile"
    document.title = 'Ways Books | ' + title

    return (
        <div>
            <Container fluid>
                <NavbarUser />
                <Container>
                    <h1 className='py-3'>Profile</h1>
                    <div className="container-card-profile d-flex">
                        <div style={{ width: '70%', height: '100%' }} className="p-2">
                            <div className='desc-profile'>
                                <h5> <IoMailSharp style={{ marginRight: '20px' }} />DaniDewantara02@gmail.com</h5>
                                <small>
                                    Email
                                </small>

                                <h5> <BsGenderAmbiguous style={{ marginRight: '20px' }} />Male</h5>
                                <small>
                                    Gender
                                </small>

                                <h5> <BsFillTelephoneFill style={{ marginRight: '20px' }} />0812-8623-8911</h5>
                                <small>
                                    Mobile phone
                                </small>

                                <h5> <SiGooglemaps style={{ marginRight: '20px' }} />Perumahan Permata Bintaro Residence C-3</h5>
                                <small>
                                    Address
                                </small>

                            </div>
                        </div>
                        <div style={{
                            width: '30%',
                            height: '100%',
                        }} className="p-2">
                            <img style={{
                                width: '70%',
                                height: '70%',
                                marginBottom: '10px',
                                marginLeft: '50px',
                                marginTop: '30px'
                            }}
                                src={ImgProfile}
                                alt="foto profile" /><br />
                            <Button
                                style={{
                                    width: '70%',
                                    marginLeft: '50px'
                                }}
                                variant='danger'>
                                Edit Profile
                            </Button>
                        </div>
                    </div>
                </Container>

                <Container className='py-5'>
                    <h1 >My Book</h1>
                    <Row className='py-5'>
                        <Col style={{marginRight :'40px'}} className='col-2'>
                            <Card style={{ width: '13rem', }}>
                                <Card.Img style={{height : '250px'}} variant="top" src={ListBook1} />
                                <Card.Body>
                                    <Card.Title>My Own Private Mr. Cool</Card.Title>
                                    <Card.Text>
                                            By. Indah Hanaco
                                    </Card.Text>
                                    <Link to='/download'>
                                        <Button style={{width :'100%'}} variant="dark">Download</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col style={{marginRight :'40px'}} className='col-2'>
                            <Card style={{ width: '13rem', }}>
                                <Card.Img style={{height : '250px'}} variant="top" src={ListBook2} />
                                <Card.Body>
                                    <Card.Title>Sebuah Seni untuk bersikap Bodo A...</Card.Title>
                                    <Card.Text>
                                    By. Mark Manson
                                    </Card.Text>
                                    <Button style={{width :'100%'}} variant="dark">Download</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>


            </Container>
        </div>
    )
}
