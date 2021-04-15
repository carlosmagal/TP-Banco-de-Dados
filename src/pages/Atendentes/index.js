import React, { useEffect, useState } from 'react'

import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
// import Pagination from '@material-ui/lab/Pagination'

import Card from '../../components/Cards/Atendente/index'
import { dateMask, phoneMask, RGmask } from '../../utils/masks'
import api from '../../services/api'
import './styles.css'

const Atendentes = (props) =>{

    const[name, setName] = useState('adfa')
    const[RG, setRG] = useState('5234245')
    const[CPF, setCFP] = useState('')
    const[date, setData] = useState('2020-01-02')
    const[sex, setSex] = useState('H')
    const[address, setAddress] = useState('2352345')
    const[phone, setPhone] = useState('52345')
    const[salary, setSalary] = useState('52345')
    const[dateAd, setDataAd] = useState('2020-02-11')

    const[data, setData1] = useState([])

    useEffect(()=>{
        loadItens()
    },[])

    const handleRegister = async() =>{
        await api.post('/pessoa',{
            rg:RG, 
            cpf:CPF, 
            nome:name, 
            sexo:sex, 
            endereco:address, 
            data_de_nascimento:date 
        }).then(response=>{
            console.log(response)
        }).catch(error=>{
            console.log(error);
        })

        let code

        await api.post('/funcionario',{
            cpf: CPF,
            agencia:41241,
            salario:salary,
            data_de_admissao:dateAd,
        }).then(response=>{
            console.log(response)

            code  = response.data[0].codigo_funcionario
            console.log(code);
        })

        await api.post('/funcionario/atendente',{
            codigo: code,
        }).then(response=>{
            console.log('response')
            loadItens()
        })


    }

    const loadItens = async() =>{
        await api.get('/funcionario/atendente')
        .then(response=>{
            setData1(response.data)
            console.log(response);
        }).catch(error=>{

        })
    }

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
                            setCFP(e.target.value)
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
                            ['H', 'M'].map((option) => (
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
                    <button 
                        type='submit' 
                        onClick={handleRegister}
                    >
                        Cadastrar
                    </button>
                </div>
                
            </aside>
            <main>
                <div className="cards-container">
                    {
                        data.map(item=>
                            <Card key={item.codigo_funcionario} data={item} a/>
                        )
                    }
                </div>
                {/* <div className='pagination'>
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
                </div> */}
            </main>
        </div>
    )

}

export default Atendentes