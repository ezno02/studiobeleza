import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'

const Header = ({ namePage, scrollAtingido, scrollAtingidoToColor }) => {
    const [menuHeader, setMenuHeader] = useState(false)

    return (
        <header className={(scrollAtingidoToColor === true ? "header-red-color" : "")}>
            <Link className={"title__header " + (scrollAtingido === true || namePage != 'home' ? "titleOpen" : "")} to='/'>Studio Beleza</Link>
            <div className="navs">
                <div id="sectionHud" onClick={() => setMenuHeader(!menuHeader)}>{namePage}<span class="material-symbols-outlined">arrow_drop_down</span></div>

                <div className={"navBar" + (menuHeader === true ? " navBar__open" : "")} >
                    <Link to="/" >Home</Link>
                    <a href="#services" >Serviços</a>
                    <a href="#contact" >Contato</a>
                </div>
            </div>
        </header >
    )
}

export default Header