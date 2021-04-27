import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import Content from './fortfolio/Content'

export default function Portfolio() {
    return (
        <>
            <section className="protfolio-section">
                <div className="tab-wrapper">
                    <Tabs className="rotate" defaultActiveKey="home" id="uncontrolled-tab-example">
                        <Tab eventKey="home" title="Home">
                            <Content />
                        </Tab>
                        <Tab eventKey="profile" title="Profile">
                        </Tab>
                        <Tab eventKey="contact" title="Contact" disabled>
                        </Tab>
                    </Tabs>
                </div>
            </section>
        </>
    )
}
