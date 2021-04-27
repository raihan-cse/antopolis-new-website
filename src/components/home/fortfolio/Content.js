import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Content() {
    return (
        <>
            <section className="profile-content-section">
                <Container fluid>
                    <Row>
                        <Col md={3}>
                            <div className="profile-content-inner">
                                <div className="profile-left-box">
                                    <div className="profile-left-contet">
                                        <h3>Techonological Solutions</h3>
                                        <ul>
                                            <li>
                                                <div className="icon">
                                                    <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/img/ui-us.svg'} alt="" />
                                                </div>
                                                <div className="text">
                                                    <p>UI/UX Design</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/img/websites.svg'} alt="" />
                                                </div>
                                                <div className="text">
                                                    <p>Websites</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/img/mobile-app.svg'} alt="" />
                                                </div>
                                                <div className="text">
                                                    <p>Mobile Apps</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/img/software.svg'} alt="" />
                                                </div>
                                                <div className="text">
                                                    <p>Corporate Software</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="full-profile">
                                        <a href="#demo">
                                            full profile
                                            <img src={process.env.PUBLIC_URL + '/assets/img/angle-right-black.svg'} alt="angle-right-white" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={9}>
                            <div className="profile-content-inner">
                                <div className="profile-right-box"></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
