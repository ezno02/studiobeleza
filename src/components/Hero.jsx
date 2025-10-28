import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    const carrocelClasses = ['', 'hero-image1', 'hero-image2']
    const [numCarrocelClasses, setNumCarrocelClasses] = useState(0)

    const carrocelRefresh = () => {
        let i = numCarrocelClasses + 1
        if (numCarrocelClasses < 3) {
            setNumCarrocelClasses(i)
        } else {
            setNumCarrocelClasses(0)
        }
    }
    useEffect (() => {
        const intervalId = setInterval(carrocelRefresh, 3000)

        return () => {
            clearInterval(intervalId)
        }
    }, [carrocelRefresh])
    return (
        <section className={'hero ' + carrocelClasses[numCarrocelClasses]} >
            < div className="texts" >
                <div className="texts__content">
                    <h1>
                        <span className="studio__h1">Studio</span>
                        <span className="beleza__h1">Beleza</span>
                    </h1>
                    <h2>Aqui seu corte vale Tudo!</h2>
                </div>
            </div >
            <div className="button-hero">
                <Link onClick={() => setNumCarrocelClasses(numCarrocelClasses + 1)}>Agendar Visita</Link>
            </div>
        </section >
    )
}

export default Hero