import React, { useEffect } from 'react'
import { Link, useOutletContext, useParams } from 'react-router-dom'
import { workerAssets } from '../assets/workers'

const Worker = () => {
    const [setNamePage] = useOutletContext()
    setNamePage('worker')
    const { id, } = useParams()
    const worker = workerAssets[id]
    return (
        <div id='workerFunctionBodyCss'>
            <Link className="voltarHome" to="/">Voltar</Link>
            <div className="container">
                <div className="image__worker">
                    <img src={worker.imagem} alt={"Imagem do " + worker.nome} />
                </div>
                <div className="texts">
                    <h2>{worker.nome} {worker.sobreNome}</h2>
                    <p>{worker.descricaoRoute}</p>
                </div>
            </div>
        </div>
    )
}

export default Worker