import React from 'react'
import { Container, Button } from 'react-bootstrap'
import NavbarUser from '../components/NavbarUser'

import ReadBook from '../components/content/ReadBook'

function DownloadBook() {
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
                            <Button style={{ width: '100%' }} variant='dark'>Download</Button>
                        </div>
                    </div>
                </div>
            </Container>
    </div>
  )
}

export default DownloadBook
