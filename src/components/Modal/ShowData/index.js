import React from 'react'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import moment from 'moment'

import './styles.css'
const Modal = (props) =>{

    return(
        <Dialog
            open={props.showModal}
            onClose={()=>props.setShowModal(false)}
            maxWidth='lg'
        >
            <DialogTitle id="max-width-dialog-title">Dados do atendente</DialogTitle>

            <DialogContent>
                <DialogContentText>
                    <div className='atende-data'>

                    
                        <strong>Nome:&nbsp;</strong>{props.data.nome} <br/>
                        {/* <strong>Idade:&nbsp;</strong>{props.data.nome} <br/> */}
                        {/* <strong>Telefone:&nbsp;</strong>{props.data.nome} <br/> */}
                        <strong>CPF:&nbsp;</strong>{props.data.cpf} <br/>
                        <strong>RG:&nbsp;</strong>{props.data.rg} <br/>
                        <strong>Endereço:&nbsp;</strong>{props.data.endereco} <br/>
                        <strong>Data de admissão:&nbsp;</strong>{moment(props.data.data_de_admissao).format('L')} <br/>
                        <strong>Salário:&nbsp;</strong>R$ {props.data.salario} <br/>
                        <strong>Código:&nbsp;</strong>{props.data.codigo_funcionario} <br/>
                    </div>
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <p className="modal-button" onClick={()=>props.setShowModal(false)}>Fechar</p>
            </DialogActions>

        </Dialog>
    )
}

export default Modal