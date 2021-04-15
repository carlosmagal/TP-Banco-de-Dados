import React, { useState } from 'react'

import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Pagination from '@material-ui/lab/Pagination'

import Card from '../../components/Cards/Atendente/index'
import { dateMask, phoneMask, cpfMask, RGmask } from '../../utils/masks'
import './styles.css'

const Segurancas = (props) =>{

    const[name, setName] = useState('')
    const[RG, setRG] = useState('')
    const[CPF, setCFP] = useState('')
    const[date, setData] = useState('')
    const[sex, setSex] = useState('')
    const[address, setAddress] = useState('')
    const[phone, setPhone] = useState('')
    const[salary, setSalary] = useState('')
    const[dateAd, setDataAd] = useState('')
    

    return (
        <div id='container-atendentes'>
            <aside>
                <p className='titulo'>Cadastrar atendente</p>

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
                
                <div className='two-inputs'>
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
                </div>

                <div className='two-inputs'>
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
                            ['Masculino', 'Feminino'].map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                </div>

                <TextField 
                    id="address" 
                    label="Endereço"
                    autoComplete='new-password'
                    className='form-input'
                    value={address}
                    onChange={e=>
                        setAddress(e.target.value)
                    }
                />

                <TextField 
                    id="phone" 
                    label="Telefone"
                    autoComplete='new-password'
                    className='form-input'
                    value={phone}
                    onChange={e=>
                        setPhone(phoneMask(e.target.value))
                    }
                />
                
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
                
                {/* <h3>Escala</h3> */}
                
                
                <div className='button-container'>
                    <button>
                        Cadastrar
                    </button>
                </div>
                
            </aside>
            <main>
                <div className="cards-container">
                    <Card/><Card/><Card/><Card/><Card/>
                    <Card/><Card/><Card/><Card/><Card/>
                    <Card/><Card/><Card/><Card/><Card/>
                    <Card/><Card/><Card/><Card/><Card/>
                </div>
                <div className='pagination'>
                    <Pagination 
                        count={10}
                        page={1}
                        onChange={(event,value) => {
                            // value===currentPage ? setDisablePagination(false) : setDisablePagination(true)
                            // setCurrentPage(value)
                            // setMount(false)
                            window.scrollTo(0, 0)

                        }}
                        color='primary'
                        // disabled={disablePagination}
                    />
                </div>
            </main>
        </div>
    )

}

export default Segurancas