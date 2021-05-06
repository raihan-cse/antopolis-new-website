import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Footer() {
    return (
        <>
            <footer className="footer spt-100">
                <Container>
                    <div className="footer-main">
                        <Row>
                            <Col xs={12} md={4}>
                                <div className="flogo-wrapper">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/anto-logo-black.png'} alt="black-logo" />
                                </div>
                            </Col>
                            <Col xs={12} md={8}>
                                <div className="finfo-wrapper">
                                    <Row>
                                        <Col xs={6} sm={4}>
                                            <div className="link-box ft-title">
                                                <h6>Customer Service</h6>
                                                <ul>
                                                    <li>
                                                        <a href="#demo">FAQs</a>
                                                    </li>
                                                    <li>
                                                        <a href="#demo">Careers</a>
                                                    </li>
                                                    <li>
                                                        <a href="#demo">Terms & Policies</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col xs={6} sm={4}>
                                            <div className="contact-box ft-title">
                                                <h6>Contact Info</h6>
                                                <ul>
                                                    <li>
                                                        <p className="icon">
                                                            <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/img/land-phone.svg'} alt="land-phone" />
                                                        </p>
                                                        <p>+8801768765444</p>
                                                    </li>
                                                    <li>
                                                        <p className="icon">
                                                            <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/img/mail.svg'} alt="mail-box" />
                                                        </p>
                                                        <p>hr.antopolis@gmail.com</p>
                                                    </li>
                                                    <li>
                                                        <p className="icon">
                                                            <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/img/location.svg'} alt="location" />
                                                        </p>
                                                        <p>Niketan, Dhaka</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <div className="social-wrapper">
                                                <ul>
                                                    <li>
                                                        <a href="#demo">
                                                            <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/img/facebook.svg'} alt="facebook" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#demo">
                                                            <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/img/instagram.svg'} alt="instagram" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#demo">
                                                            <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/img/twitter.svg'} alt="twitter" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <Col md={12}>
                            <div className="copyright">
                                <p>Copyright 2020 - {(new Date().getFullYear())}</p>
                                <div className="gray-round">
                                    <div></div>
                                </div>
                                <p>All rights reserved by Antopolis</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}
