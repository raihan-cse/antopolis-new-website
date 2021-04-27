import React from 'react'
import AnimatedCount from './AnimatedCount'
import Clients from './Clients'
import DigitalExperience from './DigitalExperience'
import GreatTogether from './GreatTogether'
import Portfolio from './Portfolio'

export default function Home() {
    return (
        <>
            <DigitalExperience />
            <Portfolio />
            <Clients />
            <AnimatedCount />
            <GreatTogether />
        </>
    )
}
