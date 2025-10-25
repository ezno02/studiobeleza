import React from 'react'

const WorkerComponent = ({ nome, descricao, imagem, id }) => {
    return (
        <div className='worker__card'>
            <div className="image-div">
                <img src={imagem} alt={"Imagem do " + nome} />
            </div>
            <div className="texts">
                <h2>{nome}</h2>
                <p>{descricao}</p>
            </div>
        </div>
    )
}

export default WorkerComponent