import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Imagem1 from '../assets/images/imagem1Laminas.jpg'

const Home = ({ setNamePage }) => {
    useEffect(() => {
        () => setNamePage('home')
    }, [setNamePage])
    return (
        <main>
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
            <section id='sobre'>
                <div className="container">
                        <h2>Sobre Nós</h2>
                    <div className="box">
                        <div className="image">
                            <img src={Imagem1} alt="Imagem " />
                            <p></p>
                        </div>
                        <div className="text">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, modi quasi itaque sit atque maiores illo vel perspiciatis porro recusandae ut omnis! At nisi doloribus quasi eum, odio assumenda mollitia? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis iste repellat debitis perspiciatis quos, dignissimos ad? Deserunt in quae voluptatum repudiandae, eum recusandae beatae eaque, autem vel, voluptatibus deleniti aliquam.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home