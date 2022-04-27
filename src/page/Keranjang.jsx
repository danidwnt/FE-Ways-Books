import React from 'react'
import { Button, Container } from 'react-bootstrap'
import NavbarUser from '../components/NavbarUser'

import ImgTrans from '../assets/ListBook1.png'
import ImgTrans2 from '../assets/Rectangle1.png'

import { BsTrash } from 'react-icons/bs'

function Keranjang() {
  
  const title = "Keranjang"
  document.title = 'Ways Books | ' + title

  return (
    <div>
      <NavbarUser />
      <Container classNameName='py-5 px-5'>
        <h3 className='py-4 mt-2'>My Cart</h3>
        <div>
          <div className="d-flex flex-row">
            <div style={{ width: '60%', marginRight: '30px' }} className="p-2">
              <h5>Review Your Order</h5>
            </div>
          </div>
          <div className='vh-100'>
          <div className="d-flex flex-row">
            <div style={{ width: '60%', marginRight: '30px', borderTop: '1px solid black', borderBottom: '1px solid black' }} className="p-2">

              <div className="d-flex flex-row">
                <div style={{ width: '25%' }} className="p-2">
                  <img src={ImgTrans} alt="imgTrans" style={{
                    width: '130px',
                    height: '175px',
                  }} />
                </div>
                <div style={{ width: '65%' }} className="p-2">
                  <h5>My Own Private Mr. Cool</h5>
                  <i>By. Indah Hanaco</i>
                  <h6>Rp.75.000</h6>
                </div>
                <div style={{ width: '10%' }} className="p-2">
                  <BsTrash />
                </div>
              </div>

              <div className="d-flex flex-row">
                <div style={{ width: '25%' }} className="p-2">
                  <img src={ImgTrans2} alt="imgTrans" style={{
                    width: '130px',
                    height: '175px',
                  }} />
                </div>
                <div style={{ width: '65%' }} className="p-2">
                  <h5>My Own Private Mr. Cool</h5>
                  <i>By. Indah Hanaco</i>
                  <h6>Rp.75.000</h6>
                </div>
                <div style={{ width: '10%' }} className="p-2">
                  <BsTrash />
                </div>
              </div>

            </div>
            <div style={{ width: '30%', height: '100px', borderTop: '1px solid black', borderBottom: '1px solid black' }} className="p-2">
              <div className="d-flex flex-row">
                <div style={{ width: '70%' }} className="p-2">
                  <p>Subtotal</p>
                  <p style={{ margin: '20px 0px' }}>Qty</p>
                  <h6 style={{color : '#44B200'}}>Total</h6>
                </div>
                <div style={{ width: '30%' }} className="p-2">
                  <p>134.000</p>
                  <p style={{ margin: '20px 0px' }}>2</p>
                  <h6 style={{color : '#44B200'}}>134.000</h6>
                </div>
              </div>
              <Button style={{width : '100%', fontWeight: 'bold', marginTop: '30px'}} variant='dark'> Pay </Button>
            </div>

          </div>
        </div>
        </div>
      </Container>
    </div>
  )
}

export default Keranjang
