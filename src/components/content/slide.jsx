import React, { Component } from "react";
import Slider from "react-slick";
import { Button } from "react-bootstrap";
import ImgBook1 from '../../assets/Rectangle1.png'
import ImgBook2 from '../../assets/Rectangle2.png'
import ImgBook3 from '../../assets/Rectangle3.png'

export default class MultipleItems extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true
          };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <div className="card-slide d-flex flex-row">
                            <div className="p-2">
                                <img src={ImgBook1} alt="BookImg" />
                            </div>
                            <div className="desc-card p-2">
                                <h3>Sebuah Seni untuk Bersikap Bodo Amat</h3>
                                <small className="text-muted">By. Mark Manson</small>
                                <p>"Selama beberapa tahun belakangan, Mark Manson—melalui blognya yang sangat populer tel ...</p>
                                <h4>Rp 75.000</h4>
                                <Button
                                    style={{ width: '100%' }}
                                    variant='dark'>
                                    Add to Cart
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card-slide d-flex flex-row">
                            <div className="p-2">
                                <img src={ImgBook2} alt="BookImg" />
                            </div>
                            <div className="desc-card p-2">
                                <h3>Warm Heart</h3>
                                <small className="text-muted">By. Mark Manson</small>
                                <p>"Selama beberapa tahun belakangan, Mark Manson—melalui blognya yang sangat populer tel ...</p>
                                <h4>Rp 75.000</h4>
                                <Button
                                    style={{ width: '100%' }}
                                    variant='dark'>
                                    Add to Cart
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card-slide d-flex flex-row">
                            <div className="p-2">
                                <img src={ImgBook3} alt="BookImg" />
                            </div>
                            <div className="desc-card p-2">
                                <h3>Warm Heart</h3>
                                <small className="text-muted">By. Mark Manson</small>
                                <p>"Selama beberapa tahun belakangan, Mark Manson—melalui blognya yang sangat populer tel ...</p>
                                <h4>Rp 75.000</h4>
                                <Button
                                    style={{ width: '100%' }}
                                    variant='dark'>
                                    Add to Cart
                                </Button>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}