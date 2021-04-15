import React, { useState } from 'react'

import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import Modal from '../../Modal/ShowData/index'
import UpdateModal from '../../Modal/Update/index'
import { ReactComponent as Female} from '../../../assets/icons/female.svg'
import { ReactComponent as Male} from '../../../assets/icons/male.svg'
import { ReactComponent as Dots} from '../../../assets/icons/threeDots.svg'
import moment from 'moment'
import api from '../../../services/api'
import './styles.css'

const Card = (props) =>{

    const[showModal, setShowModal] = useState(false)
    const[anchorEl, setAnchorEl] = useState(null)

    const[updateModal, setUpdateModal] = useState(false)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleShowModal = () =>{
        setShowModal(true)
    }
    
    const handleShowUpdateModal = ()=>{
        setUpdateModal(true)
        setAnchorEl(null)
    }

    const handleDelete = async() =>{
        setAnchorEl(null)

        // let type

        // if(props.a){
        //     type = 'atendente'
        // }
        const _data = {
            codigo:props.data.codigo_funcionario,
        }

        await api.delete(`/funcionario`,{
            codigo:_data
        }).then(response=>{
            console.log(response)
        })
    }

    return(
        <>
            <div id='atendente-card'>
                <div className='left-content'>
                    {props.data.sexo === 'M' ? 
                        <Female/>:<Male/>
                    }
                </div>
                <div className="card-props">
                    <div id='dots'>
                        <strong>{props.data.nome}</strong>
                        <Dots onClick = {handleClick}/>
                    </div>
                    <p>{props.data.cpf}</p>
                    <p>{moment(props.data.data_de_admissao).format('L')}</p>

                    <p onClick={handleShowModal}>Ver informações</p>
                </div>
            </div>

            <Modal 
                showModal={showModal}
                setShowModal={setShowModal}
                data={props.data}
            />
            <UpdateModal
                showModal={updateModal}
                setShowModal={setUpdateModal}
                data={props.data}
            />

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleShowUpdateModal}>Atualizar</MenuItem>
                <MenuItem onClick={handleDelete}>Deletar</MenuItem>
            </Menu>

        </>
    )
}

export default Card