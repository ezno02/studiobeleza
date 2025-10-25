import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'

const Header = ({ namePage, setNamePage, scrollAtingido }) => {
    const [menuHeader, setMenuHeader] = useState(false)

    return (
        <header>
            <h2 className={(scrollAtingido === true || namePage != 'home' ? "titleOpen" : "")}>Studio Beleza</h2>
            <div className="navs">
                <div id="sectionHud" onClick={() => setMenuHeader(!menuHeader)}>{namePage}<span class="material-symbols-outlined">arrow_drop_down</span></div>

                <div className={"navBar" + (menuHeader === true ? " navBar__open" : "")} >
                    <Link to="/" onClick={() => setNamePage('home')}>Home</Link>
                    <Link to="/contato">Contato</Link>
                    <Link to="/servicos">Serviços</Link>
                </div>
            </div>
        </header >
    )
}

export default Header