import React from 'react'
import { useHistory, useLocation } from "react-router-dom"
import './styles.css'

const Header = () =>{

    const location = useLocation()
    const history = useHistory()

    const condition1 = location.pathname === '/'
    const condition2 = location.pathname === '/gerentes'
    const condition3 = location.pathname === '/segurancas'

    const handlePageChange = path =>{
        history.push(path)
    }


    return(
        <header>
            <div className="content">
                <div id='logo'>
                    
                </div>

                <ul id='header-buttons'>
                    <li 
                        onClick={()=>handlePageChange('/')}
                        className={condition1 ? 'border-header':''}
                    > Atendentes</li>

                    <li 
                        onClick={()=>handlePageChange('/gerentes')}
                        className={condition2 ? 'border-header':''}
                    > Gerentes</li>

                    <li 
                        onClick={()=>handlePageChange('/segurancas')}
                        className={condition3 ? 'border-header':''}
                    > Seguranças</li>
                </ul>
            </div>
            
        </header>
    )

}

export default Header