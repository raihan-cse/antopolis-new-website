import React from 'react'
import CountUp from 'react-countup';

export default function CountDown() {
    return (
        <div>
            <CountUp start={0} end={100} delay={0}>
                {({ countUpRef }) => (
                    <div>
                        <span ref={countUpRef} />
                    </div>
                )}
            </CountUp>
        </div>
    )
}
