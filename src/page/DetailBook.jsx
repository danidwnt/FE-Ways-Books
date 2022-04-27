import React from 'react'
import ReadBook from '../components/content/ReadBook'
import NavbarUser from '../components/NavbarUser'
import { Container, Button } from 'react-bootstrap'

function DetailBook() {
    return (
        <div>
            <NavbarUser />
            <Container className='py-5'>
                <ReadBook />
                <div style={{
                    width: '90%',
                }}>
                    <div className="d-flex flex-row-reverse">
                        <div style={{ width: '20%' }} className="p-2">
                            <Button style={{ width: '100%' }} variant='dark'>Add Cart</Button>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default DetailBook
