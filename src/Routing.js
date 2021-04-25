import React from 'react'
import { Route, Switch} from 'react-router'
import Home from './components/home/Home'
import Notfound from './components/pages/Notfound'

export default function Routing() {
    return (
        <>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route component={Notfound} />
            </Switch>
        </>
    )
}
