import React from 'react'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

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

                    
                        <strong>Nome:&nbsp;</strong>Nome <br/>
                        <strong>Idade:&nbsp;</strong>Nome <br/>
                        <strong>Telefone:&nbsp;</strong>Nome <br/>
                        <strong>CPF:&nbsp;</strong>Nome <br/>
                        <strong>RG:&nbsp;</strong>Nome <br/>
                        <strong>Endereço:&nbsp;</strong>rua restes <br/>
                        <strong>Data de admissão:&nbsp;</strong>21/21/12 <br/>
                        <strong>Salário:&nbsp;</strong>R$ 1212,31 <br/>
                        <strong>Código:&nbsp;</strong>41234 <br/>
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