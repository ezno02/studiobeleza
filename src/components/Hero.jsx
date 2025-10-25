import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section id="hero">
            <div className="texts">
                <div className="texts__content">
                    <h1>
                        <span className="studio__h1">Studio</span>
                        <span className="beleza__h1">Beleza</span>
                    </h1>
                    <h2>Aqui seu corte vale Tudo!</h2>
                </div>
            </div>
            <div className="button-hero">
                <Link>Agendar Visita</Link>
            </div>
        </section>
    )
}

export default Hero