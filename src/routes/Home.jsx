import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import Sobre from '../components/Sobre'
import Workers from '../components/Workers'
import Services from '../components/Services'
import Address from '../components/Address'
import { useOutletContext } from 'react-router-dom'


const Home = () => {
    const [setNamePage] = useOutletContext()
    setNamePage('home')
    return (
        <main>
            <Hero />
            <Sobre />
            <Workers />
            <Services />
            <Address />
        </main>
    )
}

export default Home