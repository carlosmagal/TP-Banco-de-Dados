import React, { useState } from 'react'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import TextField from '@material-ui/core/TextField'
// import MenuItem from '@material-ui/core/MenuItem'

import { dateMask} from '../../../utils/masks'
import api from '../../../services/api'
import './styles.css'

const ModalUpdate = (props) =>{

    const[name, setName] = useState(props.data.nome)
    // const[RG, setRG] = useState(props.data.rg)
    // const[CPF, setCFP] = useState(props.data.cpf)
    // const[date, setData] = useState('')
    // const[sex, setSex] = useState(props.data.sexo)
    // const[address, setAddress] = useState(props.data.endereco)
    const[salary, setSalary] = useState(props.data.salario)
    const[dateAd, setDataAd] = useState('')

    const handleUpdate = async() =>{

        const body = {
            
        }

        await api.put(`/funcionario`,{ 
            cpf: props.data.cpf,
            nome: name ? name : null,
            data_de_admissao: dateAd ? dateAd : null,
            salario: salary ? salary:null,
            
        })
        .then(response=>{
            console.log(response)
            props.setShowModal(false)
        })
    }

    return(
        <Dialog
            open={props.showModal}
            onClose={()=>props.setShowModal(false)}
            maxWidth='lg'
        >
             {/* <DialogTitle id="max-width-dialog-title">Dados do atendente</DialogTitle> */}

            <DialogContent>
                <DialogContentText>
                    <div className='atende-data'>

                        <aside>
                            <p className='titulo'>Atualizar atendente</p>

                            <TextField 
                                id="name" 
                                autoComplete='new-password'
                                label="Nome completo" 
                                className='form-input' 
                                value={name}
                                onChange={e=>
                                    setName(e.target.value)
                                }
                            />
                            
                            {/* <div className='two-inputs'>
                                <TextField 
                                    id="cpf" 
                                    autoComplete='new-password'
                                    label="CPF" 
                                    className='form-input'
                                    value={CPF}
                                    onChange={e=>
                                        setCFP(cpfMask(e.target.value))
                                    }
                                />
                                <TextField 
                                    id="rg" 
                                    label="RG" 
                                    autoComplete='new-password'
                                    className='form-input'
                                    value={RG}
                                    onChange={e=>
                                        setRG(RGmask(e.target.value))
                                    }
                                />
                            </div> */}

                            {/* <div className='two-inputs'>
                                <TextField 
                                    id="birthdate" 
                                    label="Data de nascimento" 
                                    className='form-input' 
                                    value={date}
                                    onChange={e=>
                                        setData(dateMask(e.target.value))
                                    }
                                />     
                                <TextField 
                                    id="sex" 
                                    label="Sexo" 
                                    className='form-input' 
                                    select 
                                    value={sex}
                                    onChange={e=>
                                        setSex(e.target.value)
                                }
                                >
                                    {
                                        ['M', 'H'].map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))
                                    }
                                </TextField>
                            </div> */}

                            {/* <TextField 
                                id="address" 
                                label="Endereço"
                                autoComplete='new-password'
                                className='form-input'
                                value={address}
                                onChange={e=>
                                    setAddress(e.target.value)
                                }
                            /> */}

                            {/* <TextField 
                                id="phone" 
                                label="Telefone"
                                autoComplete='new-password'
                                className='form-input'
                                value={phone}
                                onChange={e=>
                                    setPhone(phoneMask(e.target.value))
                                }
                            /> */}
                            
                            <div className='two-inputs'>
                                <TextField 
                                    id="salary" 
                                    label="Salário"
                                    autoComplete='new-password'
                                    className='form-input'
                                    value={salary}
                                    onChange={e=>
                                        setSalary(e.target.value)
                                    }
                                />
                                <TextField 
                                    id="ad-date" 
                                    label="Data de admissão" 
                                    className='form-input' 
                                    value={dateAd}
                                    onChange={e=>
                                        setDataAd(dateMask(e.target.value))
                                    }
                                />
                            </div>
                            
                            
                            {/* <div className='button-container'>
                                <button 
                                    type='submit' 
                                    onClick={handleUpdate}
                                >
                                    Atualizar
                                </button>
                            </div> */}
                
                        </aside>
                        
                    </div>
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <p className="modal-button" onClick={handleUpdate}>Confirmar</p>
                <p className="modal-button" onClick={()=>props.setShowModal(false)}>Fechar</p>
            </DialogActions>
        </Dialog>
    )
}

export default ModalUpdate