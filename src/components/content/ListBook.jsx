import React from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
// import { Link } from 'react-router-dom'
import convertRupiah from "rupiah-format";

// import bookProduct from '../../fakeData/bookProduct'

function ListBook({ item }) {

  return (
      <Card style={{ width: '15rem', height :'470px'}}>
        <Card.Img style={{
          height: '300px'
        }} variant="top" src={item.thumbnail} />
        <Card.Body>
          <Card.Title style={{ fontSize: '20px', fontFamily: 'Times New Roman', fontWeight: '700',height :'60px' }}>
            {item.title}
          </Card.Title>
          <Card.Text>
            <i className="text-muted" style={{ fontSize: '16px', fontWeight: '400' }}>
              {item.author}
            </i>
          </Card.Text>
          <Card.Title style={{ color: '#44B200' }}>
            {convertRupiah.convert(item.price)}
          </Card.Title>
        </Card.Body>
      </Card>
  )
}

export default ListBook
