import React, { useState } from 'react'
import { servicesAssets } from '../assets/workers'
import ServiceCard from './ServiceCard'

const Services = () => {

    let [openService, setOpenService] = useState(false)

    function setClassOpenService() {
        setOpenService(!openService)
    }

    return (
        <section id='services'>
            <div className="box">
                <h2>Serviços</h2>
                <div className="container">
                    <div className={"cards__services " + (openService === true ? "open--services" : "")}>
                        {servicesAssets.map((servicesAssets) => (
                            <ServiceCard
                                nome={servicesAssets.nome}
                                descricao={servicesAssets.descricao}
                                imagem={servicesAssets.imagem}
                                preco={servicesAssets.preco}
                            />
                        ))}
                    </div>
                </div>
                <button onClick={() => setClassOpenService()}>Visualizar Serviços</button>
            </div>
        </section>
    )
}

export default Services