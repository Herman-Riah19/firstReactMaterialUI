import React from 'react'
import {BrowserRouter as Browser, Switch, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './component/Navbar'

const App = () => {
    return (
        <Browser>
            <Navbar />
            <Switch>
                <Route to="/" exact>
                    <HomePage />
                </Route>
            </Switch>
        </Browser>
    )
}

export default App;
