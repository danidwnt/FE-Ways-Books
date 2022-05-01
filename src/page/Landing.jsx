import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../context/userContext';
import { Button, Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

import FormModal from '../components/modal/Modal'
import Login from '../components/modal/Login'
import Register from '../components/modal/Register'
import ListBook from '../components/content/ListBook';
import Slide from '../components/content/slide'


import Logo from '../assets/Logo.png'


import { API } from '../config/api'

const Landing = () => {


    const title = ""
    document.title = 'Ways Books ' + title

    const [books, setBooks] = useState([]);

    // Get product data from database
    const getBooks = async () => {
        try {
            const response = await API.get("/books");
            console.log(response)
            // Store product data to useState variabel
            setBooks(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getBooks();
    }, []);

    const navigate = useNavigate();
    const [state, dispatch] = useContext(UserContext);
    const [showRegister, setShowRegister] = useState(false);

    const handleShowRegister = () => {
        setShowRegister(true);
    };
    const handleCloseRegister = () => {
        setShowRegister(false);
    };

    const handleShowLogin = () => {
        dispatch({ type: "showLoginPopup" });
    };
    const handleCloseLogin = () => {
        dispatch({ type: "hideLoginPopup" });
    };

    const toggleToRegister = () => {
        setShowRegister(true);
        dispatch({ type: "hideLoginPopup" });
    };

    const toggleToLogin = () => {
        dispatch({ type: "showLoginPopup" });
        setShowRegister(false);
    };

    const checkAuth = () => {
        if (state.login === true) {
            navigate("/");
        }
    };
    checkAuth();

    return (
        <>
            <FormModal show={state.showLoginPopup} handleClose={handleCloseLogin}>
                <Login toggle={toggleToRegister} handleClose={handleCloseLogin} />
            </FormModal>
            <FormModal show={showRegister} handleClose={handleCloseRegister}>
                <Register toggle={toggleToLogin} handleClose={handleCloseLogin} />
            </FormModal>

            <Container fluid >
                <Navbar expand="lg mt-2">
                    <Container fluid>
                        <Navbar.Brand className='ps-5'>
                            <img src={Logo} width="100%" className="d-inline-block align-top" alt="WaysBook" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            </Nav>
                            <Button variant="light" style={{ color: "black", border: "2px solid black", borderRadius: '5px', width: "120px", height: '40px' }} className="navbut" onClick={handleShowLogin}>Login</Button>
                            <Button variant="dark" style={{ width: "120px", height: "40px", borderRadius: "5px", marginRight: "40px", color: "white", fontSize: "13px", fontWeight: "bold" }} onClick={handleShowRegister}> Registrasi </Button>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Row>

                    <div className='mt-5' >
                        <h1 className='text-center' style={{ marginTop: '50px', fontWeight: 400 }}>
                            With us, you can shop online & help
                        </h1>
                        <h1 className='text-center' style={{ fontWeight: 400, marginBottom: '100px' }}>
                            save your high street at the same time
                        </h1>
                    </div>
                    <Slide />
                    <h1 style={{ marginTop: '40px', marginBottom: '40px' }}> List Book </h1>
                    {books?.map((item, index) => (
                        <Col className="py-4">
                            <ListBook item={item} key={index} />
                        </Col>
                    ))}
                </Row>


            </Container>

        </>
    )
}

export default Landing
