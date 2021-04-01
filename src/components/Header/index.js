import React from 'react'

import './styles.css'

const Header = () =>{

    return(
        <header>
            <div className="content">
                <div id='logo'>
                    LOGO
                </div>

                <ul id='header-buttons'>
                    <li> Atendentes</li>
                    <li> Gerentes</li>
                    <li> Seguranças</li>
                </ul>
            </div>
            
        </header>
    )

}

export default Header