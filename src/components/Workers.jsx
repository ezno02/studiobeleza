import React from 'react'
import { workerAssets } from '../assets/workers'
import WorkerComponent from './WorkerComponent'

const workers = () => {

    return (
        <section id="workers">
            <div className="box">
                <h2>Nossa Equipe</h2>
                <div className="cards__workers">
                    {workerAssets.map((workerAssets) => (
                        <WorkerComponent
                            nome={workerAssets.nome}
                            descricao={workerAssets.descricao}
                            imagem={workerAssets.imagem}
                            id={workerAssets.id}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default workers