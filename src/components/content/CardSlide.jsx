import React from 'react'
import Slide from './slide'



import ListBook from './ListBook'

const CardSlide = () => {

    return (
        <>
            <div className='mt-5' >
                <h1 className='text-center' style={{ marginTop: '50px', fontWeight: 400 }}>
                    With us, you can shop online & help
                </h1>
                <h1 className='text-center' style={{ fontWeight: 400, marginBottom: '100px' }}>
                    save your high street at the same time
                </h1>
                
                <Slide />
            
                <ListBook />

            </div>
        </>
    )
}

export default CardSlide
