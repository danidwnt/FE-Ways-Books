import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import ListBook1 from '../../assets/ListBook1.png'
import ListBook2 from '../../assets/ListBook2.png'
import ListBook3 from '../../assets/ListBook3.png'
import ListBook4 from '../../assets/ListBook4.png'
import ListBook5 from '../../assets/ListBook5.png'

function ListBook() {
  return (
    <div>
      <Container style= {{height : '600px'}}>
        <Row>
            <h1 style={{marginBottom : '40px'}}> List Book </h1>
        </Row>
        <Row>
            <Col>
            
              <div className='list-book'>
                <Link to='/detail-book'>
                  <img src={ListBook1} alt="" />
                </Link>
                  <h4>My Own Private Mr. Cool</h4>
                  <small>By. Indah Hanaco</small>
                  <h5>Rp. 75.000</h5>
              </div>
            
            </Col> 

            <Col>
            <div className='list-book'>
                <img src={ListBook2} alt="" />
                <h4>Garis Waktu : Sebuah Perjalanan</h4>
                <small>By. Fiersa Besari</small>
                <h5>Rp. 49.300</h5>
            </div>
            </Col> 

            <Col>
            <div className='list-book'>
                <img src={ListBook3} alt="" />
                <h4>Garis Waktu : Sebuah Perjalanan</h4>
                <small>By. Fiersa Besari</small>
                <h5>Rp. 49.300</h5>
            </div>
            </Col> 

            <Col>
            <div className='list-book'>
                <img src={ListBook4} alt="" />
                <h4>Garis Waktu : Sebuah Perjalanan</h4>
                <small>By. Fiersa Besari</small>
                <h5>Rp. 49.300</h5>
            </div>
            </Col> 

            <Col>
            <div className='list-book'>
                <img src={ListBook5} alt="" />
                <h4>Garis Waktu : Sebuah Perjalanan</h4>
                <small>By. Fiersa Besari</small>
                <h5>Rp. 49.300</h5>
            </div>
            </Col> 
        </Row>
      </Container>
    </div>
  )
}

export default ListBook
