import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap';
import rupiahFormat from 'rupiah-format';
import { API } from '../config/api';
import NavbarAdmin from '../components/NavbarAdmin'

import imgEmpty from '../assets/empty.svg';



export default function TransAdmin() {
  
  const title = "List Transaction"
  document.title = 'Ways Books | ' + title


  const [transactions, setTransactions] = useState([]);

  const getTransactions = async () => {
    try {
      const response = await API.get("/transactions");
      // Store transaction data to useState variabel
      console.log(response);
      setTransactions(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);

  // console.log(transactions);


  return (
    <div>
      <NavbarAdmin />
      <Container className="py-5">
        <Row>

            <div className="text-header-category mb-4">Incoming Transaction</div>
          <Col xs="12">
          {transactions.length !== 0 ? (
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

                {transactions?.map((item, index) => (
                   
                    <tr key={index}>
                      <td className="align-middle text-center">{index + 1}</td>
                      <td className="align-middle">
                        
                          {item.data.buyer.name}
                        
                         
                      </td>

                      <td className="align-middle">{item.data.book.title}</td>
                      <td className="align-middle">
                        {rupiahFormat.convert(item.data.price)}
                      </td>

                      <td className="align-middle">
                          {item.data.status}
                      </td>
                    </tr>
                  
                  ))}
                </tbody>
              </Table>
               ) : (
                <div className="text-center pt-5">
                  <img src={imgEmpty} className="img-fluid" style={{ width: "40%" }} alt="empty" />
                  <div className="mt-3">No data Transaction</div>
                </div>
              )} 
          </Col>
        </Row>
      </Container>
    </div>
  )
}

