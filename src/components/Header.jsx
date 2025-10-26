import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'

const Header = ({ namePage, scrollAtingido, scrollAtingidoToColor }) => {
    const [menuHeader, setMenuHeader] = useState(false)

    return (
        <header className={(scrollAtingidoToColor === true ? "header-red-color" : "")}>
            <h2 className={(scrollAtingido === true || namePage != 'home' ? "titleOpen" : "")}>Studio Beleza</h2>
            <div className="navs">
                <div id="sectionHud" onClick={() => setMenuHeader(!menuHeader)}>{namePage}<span class="material-symbols-outlined">arrow_drop_down</span></div>

                <div className={"navBar" + (menuHeader === true ? " navBar__open" : "")} >
                    <Link to="/" >Home</Link>
                    <a href="#workers" >Contato</a>
                    <Link to="/" >Serviços</Link>
                </div>
            </div>
        </header >
    )
}

export default Header