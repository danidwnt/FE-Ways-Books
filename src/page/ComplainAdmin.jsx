import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import NavbarAdmin from '../components/NavbarAdmin'

import Contact from '../components/complain/Contact'
import Chat from '../components/complain/Chat'

export default function ComplainAdmin() {

  const [contact, setContact] = useState(null)

  const title = "Complain-Admin"
  document.title = 'Ways Books | ' + title

  const dataContactUser = [
    {
      id: 1,
      name: 'User 1',
      chat: 'Yes, Is there anything I can help',
      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
    },
    {
      id: 2,
      name: 'User 2',
      chat: 'Yes, Is there anything I can help',
      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
    },
    {
      id: 3,
      name: 'User 3',
      chat: 'Yes, Is there anything I can help',
      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
    },
    {
      id: 4,
      name: 'User 1',
      chat: 'Yes, Is there anything I can help',
      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
    },
    {
      id: 5,
      name: 'User 2',
      chat: 'Yes, Is there anything I can help',
      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
    },
    {
      id: 6,
      name: 'User 3',
      chat: 'Yes, Is there anything I can help',
      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
    },

  ]

  const dataContactAdmin = [
    {
      id: 1,
      name: 'Admin Dani',
      chat: 'Yes, Is there anything I can help',
      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
    },

  ]

  return (
    <div>
      <NavbarAdmin />
      <Container>
        <Row>
          <h3 className='py-4'>Customer Complain</h3>
          <Col className='' md={3} style={{ height: '330px', marginRight: '30px' }}>
            <Row style= {{background: '#DFDFDF', height: '100%', borderRadius : '10px'}}>
              <Col >
                <Contact dataContact={dataContactUser} setContact={setContact} contact={contact} />
              </Col>
            </Row>
          </Col>

          <Col md={8} style={{ height: '800px', marginBottom: '100px' }}>
            <Row style={{ height: '8%', background : '#C4C4C4', borderTopLeftRadius : '10px', borderTopRightRadius : '10px'}}>
              <Col>
                  <Contact dataContact={dataContactAdmin} setContact={setContact} contact={contact} />
              </Col>
            </Row>
            <Row style={{height: '90%', background: '#DFDFDF', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px'}}>
              <Col style={{height: '95vh'}}>
              <Chat contact={contact} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
