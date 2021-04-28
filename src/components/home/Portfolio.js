import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import Content from './fortfolio/Content'
import Tech from './fortfolio/Tech'
import Business from './fortfolio/Business'
// import "react-image-gallery/styles/scss/image-gallery.scss";

export default function Portfolio() {
    return (
        <>
            <section className="protfolio-section spb-100">
                <div className="tab-wrapper">
                    <Tabs className="rotate" defaultActiveKey="content" id="portfolio-tab">
                        <Tab eventKey="content" title="Content">
                            <Content />
                        </Tab>
                        <Tab eventKey="tech" title="Tech">
                            <Tech />
                        </Tab>
                        <Tab eventKey="business" title="Business">
                            <Business />
                        </Tab>
                    </Tabs>
                </div>
            </section>
        </>
    )
}
