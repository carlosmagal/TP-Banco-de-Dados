import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Atendentes from './pages/Atendentes/index'
import Gerentes from './pages/Gerentes/index'
import Segurancas from './pages/Segurancas/index'

const Router = () =>(

    <Switch>

        <Route exact path='/' component={Atendentes}/>
        <Route exact path='/gerentes' component={Gerentes}/>
        <Route exact path='/segurancas' component={Segurancas}/>

        <Redirect from ='*' to='/'/>


    </Switch>
)

export default Router

