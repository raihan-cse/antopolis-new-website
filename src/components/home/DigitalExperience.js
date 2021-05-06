import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Business from '../../assets/images/Business.svg'
import Content from '../../assets/images/Content.svg'
import Tech from '../../assets/images/Tech.svg'
import AngleRight from '../../assets/images/angle-right.svg'

export default function DigitalExperience() {
    return (
        <>
            <section className="digital-experience-section spy-100">
                <Container>
                    <Row>
                        <Col md={12} >
                            <div className="section-title-wrapper">
                                <div className="sc-title-box">
                                    <h1 className="sc-title">We create next-level digital experiences</h1>
                                </div>
                                <div className="sc-view-all-box">
                                    <a className="sc-view-all" href="#demo">
                                        <span>VIEW OUR SERVICES</span>
                                        <span>
                                            <img src={AngleRight} alt="angle-right" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <div className="de-content-wrapper">
                                <div className="img-box">
                                    <img className="img-fluid"  src={Business} alt="Business Services" />
                                </div>
                                <div className="info-box">
                                    <h3 className="title">Business Services</h3>
                                    <p className="text">Webdesign (UI & UX) is our historical expertise. We’re constantly seeking to strike the right balance.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="de-content-wrapper mx-auto">
                                <div className="img-box">
                                    <img className="img-fluid"  src={Content} alt="Business Services" />
                                </div>
                                <div className="info-box">
                                    <h3 className="title">Techonological Solutions</h3>
                                    <p className="text">Webdesign (UI & UX) is our historical expertise. We’re constantly seeking to strike the right balance.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="de-content-wrapper ml-auto">
                                <div className="img-box">
                                    <img className="img-fluid" src={Tech} alt="Business Services" />
                                </div>
                                <div className="info-box">
                                    <h3 className="title">Content Developement</h3>
                                    <p className="text">Webdesign (UI & UX) is our historical expertise. We’re constantly seeking to strike the right balance.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
