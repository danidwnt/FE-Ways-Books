import React from 'react'
import { Container } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

import CardBook from '../card/CardBook'

function ListBook() {
  return (
    <div>
      <Container style= {{height : '600px'}}>  
            <h1 style={{marginBottom : '40px'}}> List Book </h1>
        <CardBook />
      </Container>
    </div>
  )
}

export default ListBook
