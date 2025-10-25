import React from 'react'
import Imagem1 from '../assets/images/imagem1Laminas.jpg'

const Sobre = () => {
    return (
        <section id='sobre'>
            <div className="container">
                <h2>Sobre Nós</h2>
                <div className="box">
                    <div className="image">
                        <img src={Imagem1} alt="Imagem " />
                        <p></p>
                    </div>
                    <div className="text">
                        <p>No Studio Beleza, elevamos a arte do corte masculino a um novo nível. Embora nossa estética seja marcante e sofisticada, nosso ambiente é surpreendentemente aconchegante, feito para você se sentir em casa. Aqui, cada serviço é executado com carinho e paixão. Utilizamos apenas os melhores produtos do mercado para garantir que a sua experiência e o seu resultado sejam verdadeiramente únicos. Venha nos visitar.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sobre