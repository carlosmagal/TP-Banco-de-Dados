import React, { useState } from 'react'

import Modal from '../../Modal/index'
import { ReactComponent as Female} from '../../../assets/icons/female.svg'
import './styles.css'

const Card = (props) =>{

    const[showModal, setShowModal] = useState(false)

    const handleShowModal = () =>{
        setShowModal(true)
    }

    return(
        <>
            <div id='atendente-card'>
                <div className='left-content'>
                    <Female/>
                </div>
                <div className="card-props">
                    <strong>joao da silva</strong>
                    <p>341 2341234</p>
                    <p>08/08/08</p>

                    <p onClick={handleShowModal}>Ver informações</p>
                </div>
            </div>

            <Modal 
                showModal={showModal}
                setShowModal={setShowModal}
            />
        </>
    )
}

export default Card