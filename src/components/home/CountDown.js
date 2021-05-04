import React from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor'

export default function CountDown() {
    return (
        <div>
            <CountUp start={0} end={100} delay={0}>
                {({ countUpRef, start }) => (
                //     <VisibilitySensor onChange={start} delayedCall>
                //     <span ref={countUpRef} />
                // </VisibilitySensor>
                <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                </VisibilitySensor>
                    // <div>
                    //     <span ref={countUpRef} />
                    // </div>
                )}
            </CountUp>
        </div>
    )
}
