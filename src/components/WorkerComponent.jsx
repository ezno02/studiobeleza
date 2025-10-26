import React from 'react'
import { Link } from 'react-router-dom'

const WorkerComponent = ({ nome, descricao, imagem, id }) => {
    return (
        <Link to={'/worker/' + id} className='worker__card' >
            <div className="image-div">
                <img src={imagem} alt={"Imagem do " + nome} />
            </div>
            <div className="texts">
                <h2>{nome}</h2>
                <p>{descricao}</p>
            </div>
        </Link>
    )
}

export default WorkerComponent