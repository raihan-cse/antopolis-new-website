import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

export default function AnimatedCount() {
    return (
        <>
            <section className="animated-count-section spy-75">
                <Container>
                    <Row>
                        <Col xs={12} md={4}>
                            <div className="counter-wrapper left">
                                <div className="number">
                                    <h1>
                                        <CountUp start={0} end={8} delay={0} redraw={true}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                    </h1>
                                </div>
                                <div className="number pl -1 pr-2">
                                    <h1>
                                        <span>+</span>
                                    </h1>
                                </div>
                                {/* <div className="exp-plus">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/plus-bold.svg'} alt="plus icon" />
                                </div> */}
                                <div className="text">
                                    <p>YEARS OF EXPERIENCE</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4}>
                            <div className="counter-wrapper mid">
                                <div className="number">
                                    <h1>
                                        <CountUp start={0} end={271} delay={0} redraw={true}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                    </h1>
                                </div>
                                <div className="number">
                                    <h1>
                                        <span>+</span>
                                    </h1>
                                </div>
                                {/* <div className="exp-plus">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/plus-bold.svg'} alt="plus icon" />
                                </div> */}
                                <div className="text">
                                    <p>SUCCESSFUL PROJECTS</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4}>
                            <div className="counter-wrapper right">
                                <div className="number">
                                    <h1>
                                        <CountUp start={0} end={95} delay={0} redraw={true}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                    </h1>
                                </div>
                                <div className="number">
                                    <h1>
                                        <span>+</span>
                                    </h1>
                                </div>
                                {/* <div className="exp-plus">
                                    <img src={process.env.PUBLIC_URL + '/assets/img/plus-bold.svg'} alt="plus icon" />
                                </div> */}
                                <div className="text">
                                    <p>SATISFIED <br /> CLIENTS</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
