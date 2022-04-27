import React from 'react'
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import ShowMoreText from 'react-show-more-text';
import rupiahFormat from 'rupiah-format';
import NavbarAdmin from '../components/NavbarAdmin'

import imgEmpty from '../assets/empty.svg';



export default function TransAdmin() {
    let products = [
        {
            id: 1,
            name: 'Dani dewantara',
            book : 'Surat Cinta Untuk Della',
            price: '500000',
            stock: 600,
            status : 'Approve',
        },
        {
            id: 2,
            name: 'Farizi Hutagalung',
            book : 'Surat Cinta Untuk Della',
            price: '700000',
            stock: 300,
            status : 'Pending',
        },
        {
            id: 3,
            name: 'Putra Monitor',
            book : 'Surat Cinta Untuk Della',
            price: '2300000',
            stock: 250,
            status : 'Cancel',
        },
        {
            id: 4,
            name: 'Alam Mak Iis',
            book : 'Surat Cinta Untuk Della',
            price: '9500000',
            stock: 25,
            status : 'Approve',          
}
    ];
  return (
    <div>
      <NavbarAdmin />
      <Container className="py-5">
        <Row>
          <Col xs="6">
            <div className="text-header-category mb-4">Incoming Transaction</div>
          </Col>
          <Col xs="12">
            {/* {products?.length !== 0 ? ( */}
              <Table striped hover size="lg" variant="light">
                <thead style={{color : 'red', height : '50px'}}>
                  <tr style={{margin : 'auto auto'}}>
                    <th width="1%" className="text-center">
                      No
                    </th>
                    <th>User</th>
                    <th>Product Purchased</th>
                    <th>Total Payment</th>
                    <th>Status Payment</th>
                  </tr>
                </thead>
                <tbody>

                  {products?.map((item, index) => (
                    <tr key={index}>
                      <td className="align-middle text-center">{index + 1}</td>
                      <td className="align-middle">
                        
                          {item.name}
                        
                         
                      </td>

                      <td className="align-middle">{item.book}</td>
                      <td className="align-middle">
                        {rupiahFormat.convert(item.price)}
                      </td>

                      <td className="align-middle">
                          {item.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>

          </Col>
        </Row>
      </Container>
    </div>
  )
}

