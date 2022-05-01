import React, {useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import NavbarUser from '../components/NavbarUser';
import ListBook from '../components/content/ListBook';
import Slide from '../components/content/slide'
import { API } from "../config/api";

// import { Outlet, useNavigate } from 'react-router-dom'
// import { UserContext } from '../context/userContext'

function Home() {

    
    const title = "Home"
    document.title = 'Ways Books | ' + title

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

    return (
        <div>
            <NavbarUser />
            <Container >
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

                
            </Container >
        </div >
    )
}

export default Home
