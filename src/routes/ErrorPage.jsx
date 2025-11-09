import React from 'react'
import '../styles/ErrorPage.css'

const ErrorPage = () => {
    return (
        <div id='errorPage'>
            <h2>Estamos Em Manutenção no momento, Tente entrar novamente mais tarde</h2>
            <ul>
                <li>Verifique sua conexão com a internet.</li>
                <li>Procure por informações no forum de discussões <span>Aura</span>.</li>
                <li>Tente se conectar a outros serviços.</li>
            </ul>
        </div>
    )
}

export default ErrorPage