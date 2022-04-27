import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Logo from '../assets/Logo.png'
import Keranjang from '../assets/keranjang.png'
import DropDown from '../assets/dropprofile.png'

import { BsPerson } from 'react-icons/bs'
import { BiMessage } from 'react-icons/bi'
import { GrLogout } from 'react-icons/gr'


function NavbarUser() {
    return (
        <div>
            <Navbar expand="lg mt-2">
                <Container fluid>
                    <Navbar.Brand className='ps-5'>
                        <Link to='/'>
                            <img src={Logo} width="100%" className="d-inline-block align-top" alt="WaysBook" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        </Nav>
                        <Link to='/keranjang'>
                            <img src={Keranjang} alt="img keranjang" />
                        </Link>
                        <NavDropdown style={{ width: '250px', textAlign: 'center' }} title={<img style={{ marginRight: '40px' }} src={DropDown} alt="profile" />} id="basic-nav-dropdown">
                            <div style={{ width: '250px', height: '180px' }}>

                                <NavDropdown.Item style={{
                                    height: '50px',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    fontSize: '24px',
                                    lineHeight: '33px',
                                    padding: '5px 10px'
                                }} >
                                    <Link style={{ textDecoration: 'none', color: 'black' }} to='/profile'>
                                        <BsPerson style={{ width: '50px', height: '30px' }} /> Profile
                                    </Link>
                                </NavDropdown.Item>


                                <NavDropdown.Item style={{
                                    height: '50px',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    fontSize: '24px',
                                    lineHeight: '33px',
                                    padding: '5px 10px',
                                    marginBottom: '20px'

                                }}> 
                                <Link style={{ textDecoration: 'none', color: 'black' }} to='/complain'>
                                    <BiMessage style={{ width: '50px', height: '30px' }} /> Complain
                                </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider style={{ height: '2px' }} />
                                <NavDropdown.Item style={{
                                    height: '50px',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    fontSize: '24px',
                                    lineHeight: '33px',
                                    padding: '5px 15px'

                                }} >
                                    <Link style={{ textDecoration: 'none', color: 'black' }} to='/landing'>
                                        <GrLogout style={{ width: '50px', height: '30px', color: 'red' }} />
                                        Logout
                                    </Link>
                                </NavDropdown.Item>
                            </div>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarUser
