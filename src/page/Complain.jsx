import React, {useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import NavbarUser from '../components/NavbarUser'

import Contact from '../components/complain/Contact'
import Chat from '../components/complain/Chat'

function Complain() {
    const [contact, setContact] = useState(null)

    const title = "Complain"
    document.title = 'Ways Books| ' + title

    const dataContact = [
        {
            id: 1,
            name: 'Admin',
            chat: 'Yes, Is there anything I can help',
            img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
        },
        
    ]
  return (
    <div>
      <NavbarUser />
      <Container className='mt-5' style={{height: '89.5vh'}}>
          <Row style={{ height: '10%', background : '#C4C4C4', borderTopLeftRadius : '10px', borderTopRightRadius : '10px'}}>
              <Col style={{height: '10%'}}>
                <Contact dataContact={dataContact}  setContact={setContact} contact={contact} />
              </Col>
          </Row >
          <Row style={{height: '90%', background: '#DFDFDF', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px'}}>
              <Col style={{height: '90vh'}}>
                <Chat contact={contact} />
              </Col>
          </Row>
      </Container>
    </div>
  )
}

export default Complain
