import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import Content from './fortfolio/Content'
import Tech from './fortfolio/Tech'
import Business from './fortfolio/Business'

export default function Portfolio() {
    return (
        <>
            <section className="protfolio-section spb-100">
                <div className="tab-wrapper">
                    <Tabs className="rotate" defaultActiveKey="business" id="portfolio-tab">
                        <Tab eventKey="content" title="Content" tabClassName="bgs-tab">
                            <Content />
                        </Tab>
                        <Tab eventKey="tech" title="Tech" tabClassName="">
                            <Tech />
                        </Tab>
                        <Tab eventKey="business" title="Business" tabClassName="bgs-tab">
                            <Business />
                        </Tab>
                    </Tabs>
                </div>
            </section>
        </>
    )
}
