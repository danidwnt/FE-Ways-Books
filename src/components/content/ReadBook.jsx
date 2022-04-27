import React from 'react'
import { Container } from 'react-bootstrap'

import ImgDownloadBook from '../../assets/ListBook1.png'

function ReadBook() {
    return (
        <div>
            <Container className='py-5'>
                <div className='d-flex'>
                    <div className="d-flex justify-content-end" style={{
                        width: '50%',
                    }}>
                        <img src={ImgDownloadBook} alt="" style={{
                            width: '430px',
                            height: '570px',
                            paddingRight: '30px'
                        }} />
                    </div>
                    <div className="desc-download-book p-2 " style={{
                        width: '40%',
                    }}>
                        <h1> My Own Private Mr Cool </h1>
                        <h4>By. Indah Hanaco</h4>
                        <h3>Publication date</h3>
                        <small>August 2018</small>
                        <h3>Pages</h3>
                        <small>253</small>
                        <h3 style={{ color: 'red' }}>ISBN</h3>
                        <small>9786020395227</small>
                        <h3>Price</h3>
                        <h5>Rp. 75000</h5>
                    </div>
                </div>

                <Container className='py-5'>
                    <div style={{
                        width: '80%',
                        margin: 'auto auto'
                    }}>
                        <h1>About This Book</h1>
                        <p style={{ textAlign: 'justify', color: '#929292', marginTop: '20px' }}>
                            Bagi Heidy Theapila, latar belakang keluarga membuatnya tak mudah menemukan pasangan sejiwa. Tapi, ceritanya berbeda dengan Mirza. Heidy meyakini lelaki itu mencintainya dengan tulus. Namun, keyakinannya tumbang. Pertemuan mereka bukan cuma karena campur tangan Allah semata. Melainkan karena skenario rapi yang berkaitan dengan materi. Marah sekaligus patah hati, Heidy membatalkan rencana masa depannya dan memilih kabur ke Italia. Langkahnya mungkin tak dewasa, tapi Heidy butuh ruang untuk meninjau ulang semua rencana dalam hidupnya. Lalu, Allah memberinya kejutan.


                            Dalam pelayaran menyusuri Venesia, Heidy bertemu raksasa bermata biru. Graeme MacLeod, pria yang mencuri napasnya di pertemuan pertama mereka. Meski ketertarikan di antara mereka begitu besar, Heidy tidak berniat menjalin asmara singkat. Graeme harus dilupakan. Ketika apa yang terjadi di Venesia tidak bisa tetap ditinggal di Venesia, Heidy mulai goyah. Apalagi Graeme ternyata lelaki gigih yang mengejarnya hingga ke Jakarta dan tak putus asa tatkala ditolak. Meski akhirnya satu per satu rahasia kelam lelaki itu terbuka, Heidy justru kian jatuh cinta. Pertanyaannya, apakah cinta memang benar-benar mampu menyatukan mereka?
                        </p>
                    </div>
                </Container>
            </Container>
        </div>
    )
}

export default ReadBook
