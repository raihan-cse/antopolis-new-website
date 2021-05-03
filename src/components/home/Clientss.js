import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AngleRight from '../../assets/images/angle-right.svg'
import OwlCarousel from 'react-owl-carousel-rtl'
// import $ from 'jquery'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'


export default function Clientss() {
    return (
        <>
            <section className="home-clients-section spb-100">
                <Container>
                    <Row>
                        <Col md={12} >
                            <div className="section-title-wrapper">
                                <div className="sc-title-box">
                                    <h1 className="sc-title">Clients we’ve worked with</h1>
                                </div>
                                <div className="sc-view-all-box">
                                    <a className="sc-view-all" href="#demo">VIEW all clients</a>
                                    <span>
                                        <img src={AngleRight} alt="angle-right" />
                                    </span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <OwlCarousel className="clients-slide-one" 
                    items={10} 
                    loop margin={30}
                    autoplay={true}
                    smartSpeed={1000}
                    autoplayTimeout={3000}
                    autoplayHoverPause={true}
                    dots={false} >
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Toyota.png'} alt="btcl" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Unilever.png'} alt="toyota" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Aarong.png'} alt="uniliver" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/ACI.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Airtel.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Arla.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/BK.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/BRAC.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Nissan.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/PRAN.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Toyota.png'} alt="btcl" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Unilever.png'} alt="toyota" className="ts" />
                                </a>
                            </div>
                        </div>
                    </OwlCarousel>
                    <OwlCarousel className="clients-slide-two" 
                    items={10} 
                    loop={true}
                    margin={30}
                    autoplay={true}
                    smartSpeed={1000}
                    autoplayTimeout={3000}
                    autoplayHoverPause={true}
                    dots={false}
                    rtl={true}>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Toyota.png'} alt="btcl" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Unilever.png'} alt="toyota" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Aarong.png'} alt="uniliver" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/ACI.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Airtel.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Arla.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/BK.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/BRAC.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Nissan.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/PRAN.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Toyota.png'} alt="btcl" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Unilever.png'} alt="toyota" className="ts" />
                                </a>
                            </div>
                        </div>
                    </OwlCarousel>
                    <OwlCarousel className="clients-slide-three" 
                    items={10} 
                    loop margin={30}
                    autoplay={true}
                    smartSpeed={1000}
                    autoplayTimeout={3000}
                    autoplayHoverPause={true}
                    dots={false} >
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Toyota.png'} alt="btcl" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Unilever.png'} alt="toyota" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Aarong.png'} alt="uniliver" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/ACI.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Airtel.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Arla.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/BK.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/BRAC.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Nissan.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/PRAN.png'} alt="desco" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Toyota.png'} alt="btcl" className="ts" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <div className="clients-logo">
                                <a href="#demo" className="text-decoration-none text-reset">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/client/Unilever.png'} alt="toyota" className="ts" />
                                </a>
                            </div>
                        </div>
                    </OwlCarousel>
                </Container>
            </section>
        </>
    )
}
