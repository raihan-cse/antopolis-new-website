import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function AnimatedCount() {
    return (
        <>
            <section className="animated-count-section spy-50">
                <Container>
                    <Row>
                        <Col xs={12} md={4}>
                            <div className="counter-wrapper left">
                                <div className="number">
                                    <h1>08</h1>
                                </div>
                                <div className="text">
                                    <p>YEARS OF EXPERIENCE</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4}>
                            <div className="counter-wrapper mid">
                                <div className="number">
                                    <h1>271</h1>
                                </div>
                                <div className="text">
                                    <p>SUCCESSFUL PROJECTS</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4}>
                            <div className="counter-wrapper right">
                                <div className="number">
                                    <h1>95</h1>
                                </div>
                                <div className="text">
                                    <p>SATISFIED CLIENTS</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
