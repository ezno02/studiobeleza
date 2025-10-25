import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import Sobre from '../components/Sobre'
import Workers from '../components/Workers'


const Home = ({ setNamePage }) => {
    useEffect(() => {
        () => setNamePage('home')
    }, [setNamePage])
    return (
        <main>
            <Hero />
            <Sobre />
            <Workers />
        </main>
    )
}

export default Home