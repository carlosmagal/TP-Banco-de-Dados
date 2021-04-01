import React, { useState } from 'react'

import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'

import Card from '../../components/Cards/Atendente/index'
import './styles.css'

const Atendentes = (props) =>{

    const[name, setName] = useState('')
    const[RG, setRG] = useState('')
    const[CPF, setCFP] = useState('')
    const[date, setData] = useState('')
    const[sex, setSex] = useState('')
    const[address, setAddress] = useState('')
    const[phone, setPhone] = useState('')
    const[salary, setSalary] = useState('')
    const[dateAd, setDataAd] = useState('')
    

    const dateMask = data => {
        data = data.replace(/\D/g,"")
        data = data.replace(/(\d{2})(\d)/,"$1/$2")
        data = data.replace(/(\d{2})(\d)/,"$1/$2")
        data = data.slice(0,10)
        return data
    }

    const phoneMask = phone =>{
        phone = phone.replace(/\D/g,"")
        phone = phone.replace(/(\d{2})(\d)/,"($1)$2")
        phone = phone.replace(/(\d{5})(\d)/,"$1-$2")
        phone = phone.slice(0,14)

        return phone
    }

    const cpfMask = value => (
        value
          .replace(/\D/g, '') 
          .replace(/(\d{3})(\d)/, '$1.$2') 
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d{1,2})/, '$1-$2')
          .replace(/(-\d{2})\d+?$/, '$1') 
    )
    const RGmask = rg => (
        rg
            .replace(/\D/g, '')
            .slice(0,8)
    )

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
                
                
                <div className='button-container'>
                    <button>
                        Cadastrar
                    </button>
                </div>
                
            </aside>
            <main>
                <div className="cards-container">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
            </main>
        </div>
    )

}

export default Atendentes