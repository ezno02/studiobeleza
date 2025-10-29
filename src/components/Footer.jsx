import React from 'react'
import auraLogo from '../assets/images/icons/aura.png'
import instagramIcon from '../assets/images/icons/instagramIcon.png'
import githubIcon from '../assets/images/icons/githubIcon.png'

const Footer = () => {
    return (
        <footer>
            <div className="icon">
                <a href="https://equipeaura.github.io/Aura">
                    <img src={auraLogo} alt="icone" />
                </a>
            </div>
            <div className="texts">
                <a href="https://github.com/ezno02/studiobeleza/blob/main/LICENSE">
                    © Todos os direitos reservados
                </a>
            </div>
            <div className="redes">
                <div className="instagram">
                    <a href="https://www.instagram.com/ezno_machado">
                        <img src={instagramIcon} alt="instagram" />
                    </a>
                </div>
                <div className="github">
                    <a href="https://github.com/ezno02">
                        <img src={githubIcon} alt="github" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer