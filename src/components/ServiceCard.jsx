import React from 'react'

const ServiceCard = ({ nome, descricao, imagem, preco }) => {
    return (
        <div className="service__card">
            <div className="image">
                <img src={imagem} alt="imagem do card" />
            </div>
            <div className="texts">
                <h3>{nome}</h3>
                <p>{descricao}</p>
                <p className='preco'>R${preco}</p>
            </div>
        </div>
    )
}

export default ServiceCard