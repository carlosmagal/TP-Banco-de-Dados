import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Atendentes from './pages/Atendentes/index'

const Router = () =>(

    <Switch>

        <Route exact path='/' component={Atendentes}/>

        <Redirect from ='*' to='/'/>


    </Switch>
)

export default Router

